import { BurguerIcon } from "@/components/icons";
import type { ReactElement } from "react";

type BurgerProps = {
  onClick?: () => void;
};

export function Burger({ onClick }: BurgerProps): ReactElement {
  return (
    <button className="burger" popoverTarget="menu" onClick={onClick}>
      <BurguerIcon size={18} />
    </button>
  );
}
