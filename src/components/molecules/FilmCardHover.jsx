/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IoPlayCircle } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function FilmCardHover({ film, handleUpdFavorite }) {
  const [isLiked, setIsLiked] = useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
    film.Liked = !isLiked;
    handleUpdFavorite();
    localStorage.setItem(film.imdbID, JSON.stringify({ Liked: !isLiked }));
  };

  return (
    <div id="itemInfo">
      <div className="itemTop">
        <img src={film.Poster} width={"100%"} />
      </div>
      <div className="itemBottom">
        <h6>{film.Title}</h6>
        <div className="d-flex">
          <p className="tag">Category: {film.Type}</p>
          <p className="tag">Year: {film.Year}</p>
        </div>
        <div className="d-flex justify-content-between itemFooter">
          <div>
            <IoPlayCircle size={"53px"} className="me-3" />
            <Link to={`movies/${film.imdbID}`}>
              <FaInfoCircle size={"45px"} color="#ebebeb" />
            </Link>
          </div>

          <div onClick={() => handleLike()}>
            {film && film.Liked ? (
              <GoHeartFill size={"35px"} />
            ) : (
              <GoHeart size={"35px"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
