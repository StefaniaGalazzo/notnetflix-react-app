/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { Button, Container } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";

export default function Hero({ img, video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // console.log(media, "isvideo media");
  // console.log(media, "!isvideo media");
  const handlePlay = () => {
    if (!video) return;
    if (videoRef.current.paused) {
      // console.log("play");
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  const handlePause = () => {
    if (!video) return;
    if (videoRef.current.play) {
      // console.log("pause");
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Container
      fluid
      className="p-0 overflow-hidden position-relative"
      style={{ height: "85vh" }}
    >
      {video && (
        <Button
          variant="light"
          className="text-uppercase fw-bold fs-5 position-absolute px-4 py-2"
          style={{ bottom: "80px", left: "80px", zIndex: "20" }}
        >
          <div className="d-flex align-items-center gap-2 ">
            <FaPlay />
            Continua a guardare
          </div>
        </Button>
      )}
      <div
        onMouseEnter={() => handlePlay()}
        onMouseLeave={() => handlePause()}
        style={{ opacity: isPlaying ? "0.3" : "1" }}
        className="overlay"
      ></div>
      {video && (
        <video ref={videoRef} width="100%" height="auto">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {img && <img src={img} width="100%" alt="movie-poster" />}
    </Container>
  );
}
