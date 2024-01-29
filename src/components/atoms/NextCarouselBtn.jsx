/* eslint-disable react/prop-types */
import { FaChevronRight } from "react-icons/fa";

export default function NextCarouselBtn({ title, handleNext }) {
  return (
    <button
      className="carousel-control-next pe-2 carousel-next h-100 position-absolute shadow end-0 opacity-100 text-secondary"
      type="button"
      data-bs-target={`#carousel-${title.replace(/\s+/g, "-").toLowerCase()}`}
      data-bs-slide="next"
      onClick={handleNext}
    >
      <FaChevronRight color="white" size={"20px"} />
    </button>
  );
}
