import type { ReactElement } from "react";

type AccordionProps = {
  headline: string;
  story: string;
};

export function AccordionItem({
  headline,
  story,
}: AccordionProps): ReactElement {
  return (
    <details className="accordion-item">
      <summary>{headline}</summary>
      <p>{story}</p>
    </details>
  );
}
