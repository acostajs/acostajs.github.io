import type { ReactElement } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

type BurgerProp = {
  onClick: () => void;
};

export function Burger({ onClick }: BurgerProp): ReactElement {
  return (
    <button className="burger" onClick={onClick}>
      <RxHamburgerMenu size={20} />
    </button>
  );
}
