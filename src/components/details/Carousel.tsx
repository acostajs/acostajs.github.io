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
              <figure>
                <img src={src} alt={`${alt} screenshot ${index + 1}`} />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
