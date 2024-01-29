/* eslint-disable react/prop-types */
import { useState } from "react";
import { Container } from "react-bootstrap";
import FilmCard from "../molecules/FilmCard";
import NextCarouselBtn from "../atoms/NextCarouselBtn";
import PrevCarouselBtn from "../atoms/PrevCarouselBtn";

export default function GalleryRow({ dataArr, title }) {
  const [activeIndex, setActiveIndex] = useState(0); // traccio l'indice attivo del carousel
  const itemsPerSlide = 5; // n di elementi del carousel per slide
  const totalItems = dataArr.length; // tot elementi nella dataArr
  const totalSlides = Math.ceil(totalItems / itemsPerSlide); // n tot slide necessarie

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <Container fluid className="position-relative mb-5 mt-5 ">
      <h5 className="mb-4 ms-5 ps-4 text-white">{title}</h5>
      <div
        // #1 trasformare il titolo in una stringa che viene utilizzata come identificatore unico per l'id del carousel
        id={`carousel-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner overflow-visible">
          {/* #2 */}
          {Array.from({ length: totalSlides }).map((_, index) => {
            const start = index * itemsPerSlide; // calcolo gli indici di inizio e fine per ogni slide
            const end = start + itemsPerSlide;
            const slideItems = dataArr.slice(start, end); // estraggo gli elementi da dataArr per la slide corrente
            return (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="mx-2 g-2 px-3 row row-cols-sm-4 justify-content-center flex-nowrap row-cols-md-5">
                  {slideItems.map((film, indx) => (
                    <FilmCard key={indx} film={film} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <PrevCarouselBtn title={title} handlePrev={handlePrev} />
        <NextCarouselBtn title={title} handleNext={handleNext} />
      </div>
    </Container>
  );
}

/*
#1 title..replace(/\s+/g, "-"): 
con il metodo replace sostituisco tutte gli spazi bianchi (\s+) con il -. 
metodo spesso utilizzato per creare URL-friendly e identificatori unici.
es: il titolo "Trend Now" > title.replace(/\s+/g, "-").toLowerCase() = "trend-now". 
lo uso come parte dell'id del carousel per garantire un id unico e formattato correttamente.

#2 Array.from({ length: totalSlides })
creo un array di lunghezza totalSlides, 
dove totalSlides è calcolato in base alla lunghezza dell'array di dati (dataArr) 
e al numero di elementi desiderati per slide (itemsPerSlide).
Questo nuovo array viene quindi utilizzato in un blocco di mapping per generare dinamicamente 
i carousel items per ciascuna slide. La funzione map viene applicata su ciascun elemento dell'array 
appena creato, e la lunghezza di totalSlides determina quante slide ci saranno nel carousel.
L'underscore del map è utilizzato come segnaposto quando l'argomento è necessario per la sintassi ma non è realmente utilizzato nel blocco di codice.

*/
