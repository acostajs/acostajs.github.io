import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { Burger } from "./Burger";
import { NavLinks } from "./NavLinks";

export function HiddenMenu() {
  const [toggle, setToggle] = useState(true);

  function handleClick() {
    setToggle((prev) => !prev);
  }

  return (
    <div>
      <Burger onClick={handleClick} />
      <div className={toggle ? "hidden" : ""} id="overlay">
        <div id="menu" className={toggle ? "hidden" : ""}>
          <div className="flex-between hidden-menu-top">
            <FaGithub size={24} />
            <button onClick={handleClick}>X</button>
          </div>

          <hr />
          <NavLinks
            ul_classes={["hidden-menu-links"]}
            handleClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
