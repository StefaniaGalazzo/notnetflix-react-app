/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FilmCard from "../molecules/FilmCard";

export default function Favorite({ allMovies }) {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const filteredMovies = allMovies.filter((el) => el.Liked === true);
    const storedData = favoriteMovies.map((flm) => {
      const storedMovie = localStorage.getItem(flm.imdbID);
      const parsedStoredMovie = JSON.parse(storedMovie);
      if (parsedStoredMovie)
        filteredMovies.filter((el) => el.Liked === parsedStoredMovie.Liked);
    });

    setFavoriteMovies(filteredMovies);
    console.log(favoriteMovies, "favoriteMovies");
    console.log(storedData, "storedData");
  }, [allMovies]);

  const handleUpdFavorite = () => {
    setFavoriteMovies(allMovies.filter((el) => el.Liked === true));
  };

  return (
    <>
      <h2 className="text-white ps-5 ms-5 me-5 mt-5">My favorite </h2>
      <div
        className={`p-5 mb-5 ms-5 me-5 h-100 ${
          favoriteMovies.length !== 0 && "grid"
        }`}
      >
        {favoriteMovies.length > 0 ? (
          favoriteMovies.map((film, indx) => (
            <FilmCard
              key={indx}
              film={film}
              handleUpdFavorite={handleUpdFavorite}
            />
          ))
        ) : (
          <h3 className="text-white mb-5 pb-5">
            There are no favorites here. Add your favorites films and series.
          </h3>
        )}
      </div>
    </>
  );
}
