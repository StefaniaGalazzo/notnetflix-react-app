/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import GalleryRow from "../organisms/GalleryRow";
import Hero from "../organisms/Hero";
import trailer from "../../assets/media/trailer.mp4";

export default function Home({ allMovies, searched, query, error }) {
  const firstGroup = allMovies.slice(0, 10);
  const secondGroup = allMovies.slice(10, 20);
  const thirdGroup = allMovies.slice(20, 30);

  return (
    <Container fluid className="p-0 pb-5">
      {query.length >= 2 ? (
        <div className="h-100" style={{ minHeight: "100vh" }}>
          <h2 className="text-white ps-5 ms-5 me-5 mt-5">Searched Films </h2>
          {searched}
        </div>
      ) : (
        <>
          <Hero video={trailer} isVideo />
          <GalleryRow dataArr={firstGroup} title={"Trend Now"} />
          <GalleryRow dataArr={secondGroup} title={"Watched"} />
          <GalleryRow dataArr={thirdGroup} title={"For you"} />
        </>
      )}
      {error && <p>Errore nella richiesta dei dati</p>}
    </Container>
  );
}
