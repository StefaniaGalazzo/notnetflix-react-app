/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import FilmCard from "../molecules/FilmCard";

export default function Series({ allMovies, error }) {
  const TVserie = allMovies.filter((el) => el.Type === "series");
  return (
    <Container fluid className="p-0 pb-5 h-100">
      <h2 className="text-white ps-5 ms-5 me-5 mt-5">TV Series </h2>
      <div
        className="d-flex flex-wrap ps-5 mt-4 ms-5 col-10 m-auto"
        style={{ width: " fit-content" }}
      >
        {allMovies.length > 0 ? (
          TVserie.map((film, indx) => (
            <div
              key={indx}
              className="mx-3 col-3"
              style={{ width: "250px", minWidth: "200px" }}
            >
              <FilmCard film={film} />
            </div>
          ))
        ) : (
          <h3 className="text-white mb-5 pb-5">
            There are no favorites here. Add your favorites films and series.
          </h3>
        )}
      </div>
      {error && <p>Errore nella richiesta dei dati</p>}
    </Container>
  );
}
