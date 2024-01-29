import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import FilmCardHover from "./FilmCardHover";

/* eslint-disable react/prop-types */
export default function FilmCard({ film, handleUpdFavorite }) {
  const [isHovered, setIsHovered] = useState(false); // se la card è in hover

  // function fetchLiked() {
  //   fetch(`http://www.omdbapi.com/?apikey=&=i${film.imdbID}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       filmId: film.imdbID, // Sostituisci con l'identificatore univoco del film
  //       liked: !isLiked,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setLikedFilms(data);
  //       console.log("Film aggiornato con successo:", likedFilms);
  //     })
  //     .catch((error) => {
  //       console.error("Errore durante l'aggiornamento del film:", error);
  //     });
  // }

  return (
    <>
      <Col
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="position-relative m-2"
      >
        <Card
          id="movieCard"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0 25%, transparent 65% 100%), url(${film.Poster})`,
          }}
        >
          <h4 title={film.Title} className="text-white fs-6 title-card">
            {film.Title}
          </h4>
        </Card>
        {isHovered && (
          <FilmCardHover film={film} handleUpdFavorite={handleUpdFavorite} />
        )}
      </Col>
    </>
  );
}
