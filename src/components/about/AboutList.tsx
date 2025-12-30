import type { ReactElement } from "react";

type AboutListProps = {
  array: Array<String>;
  ul_classes?: Array<string>;
  li_classes?: Array<string>;
};

export function AboutList({
  array,
  ul_classes,
  li_classes,
}: AboutListProps): ReactElement {
  const ulClasses = ul_classes?.join(" ") ?? "";
  const liClasses = li_classes?.join(" ") ?? "";

  return (
    <ul className={ulClasses}>
      {array.map((item, i) => (
        <li className={liClasses} key={i}>
          {item}
        </li>
      ))}
    </ul>
  );
}
