/* eslint-disable react/prop-types */
import { FaChevronLeft } from "react-icons/fa";

export default function PrevCarouselBtn({ title, handlePrev }) {
  return (
    <button
      className="carousel-control-prev ps-2 carousel-prev h-100 position-absolute shadow end-0 opacity-100 text-secondary"
      type="button"
      data-bs-target={`#carousel-${title.replace(/\s+/g, "-").toLowerCase()}`}
      data-bs-slide="prev"
      onClick={handlePrev}
    >
      <FaChevronLeft color="white" size={"20px"} />
    </button>
  );
}
