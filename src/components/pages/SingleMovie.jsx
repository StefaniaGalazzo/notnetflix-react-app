/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../organisms/Hero";
import { Container } from "react-bootstrap";
import { IoIosArrowDropdownCircle } from "react-icons/io";

export default function SingleMovie() {
  const { movieID } = useParams();
  const [product, setProduct] = useState([]);
  const [comments, setComments] = useState([]);
  const [openComments, setOpenComments] = useState(false);

  const fetchMovie = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?&apikey=3f6cf538&i=${movieID}`
      );
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      const result = await response.json();
      setProduct(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchComents = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/movies/${movieID}/comments`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTczNThhYmZlMDMxZTAwMTliYTE5ZWIiLCJpYXQiOjE3MDU1MDgzMDksImV4cCI6MTcwNjcxNzkwOX0.bBaqLqHK5YzwmPwgsRVbp-X-7Z2UHbEV4IszVTNu_QU",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Errore nella richiesta");
      }
      const result = await response.json();
      setComments(result);
      console.log(result, "comments");
    } catch (error) {
      console.log(error.message);
    }
  };

  //
  useEffect(() => {
    fetchMovie();
    setTimeout(() => fetchComents(), 500);
  }, [movieID]);

  return (
    <Container fluid className="p-0">
      <Hero img={product.Poster} />
      <div className="p-5">
        <h2 className="text-white mb-5">{product.Title}</h2>
        <h6 className="text-white">Duration: {product.Runtime}</h6>

        <div className="d-flex text-white">
          <div className="col1">
            <p>Plot:</p>
            <p className="me-5">{product.Plot}</p>
          </div>
          <div className="col2">
            <p>Actors:</p>
            <p>{product.Actors}</p>
          </div>
        </div>
        <div
          className="d-flex "
          //   style={{ transition: "all 0.3s easy-in-out" }}
        >
          <div className="w-100">
            <h6 className="text-white">
              Comments {"  "}
              <IoIosArrowDropdownCircle
                onClick={() => setOpenComments(!openComments)}
                className="transition-03s"
                style={{ transform: !openComments && "rotate(-90deg)" }}
              />
            </h6>
            <ul
              className={`border border-light overflow-auto rounded text-white transition-03s`}
              style={{
                height: openComments ? "300px" : "10px",
                padding: !openComments ? "0" : " 1rem",
              }}
            >
              {comments.length > 0 &&
                comments.map((comment) => (
                  <li key={comment._id}>{comment.comment}</li>
                ))}
              {!comments ||
                (comments.length === 0 && (
                  <p className="text-secondary">There are no comments here.</p>
                ))}
            </ul>
          </div>
          <div className="d-flex flex-wrap justify-content-start h-100 g-3 m-3 pt-1 text-secondary">
            <p className="tag">Year: {product.Year}</p>
            <p className="tag">Released: {product.Released}</p>
            <p className="tag">Genre: {product.Genre}</p>
            <p className="tag">Director: {product.Director}</p>
            <p className="tag">Writer: {product.Writer}</p>
            <p className="tag">Country: {product.Country}</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
