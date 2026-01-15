import { ErrorMessage } from "@/components/ui";
import type { ReactElement } from "react";

type CarouselProps = {
  images: string[];
  alt: string;
};

export function Carousel({ images, alt }: CarouselProps): ReactElement {
  if (images.length === 0) {
    return <ErrorMessage error_message="Screenshots coming soon." />;
  }

  return (
    <section className="details-carrousel">
      <div className="details-section-title">
        <h2>Project Preview</h2>
      </div>

      <div className="carousel-container">
        <ul className="carousel">
          {images.map((src, index) => (
            <li key={`slide-${index}`}>
              <figure className="thumbnail">
                <button
                  popoverTarget={`zoomed-img-${index}`}
                  className="thumbnail-btn"
                >
                  <img
                    src={src}
                    alt={`${alt} screenshot ${index + 1}`}
                    className="thumbnail-img"
                    loading="lazy"
                  />
                </button>
              </figure>
              <figure
                id={`zoomed-img-${index}`}
                popover="auto"
                className="zoomed-img"
              >
                <button
                  popoverTarget={`zoomed-img-${index}`}
                  className="close-zoom"
                >
                  <img
                    src={src}
                    alt={`${alt} screenshot ${index + 1}`}
                    className="screenshot"
                    loading="lazy"
                  />
                </button>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
