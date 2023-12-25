import React from "react";
import { navigate } from "astro:transitions/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import styles from "./FontawesomeButton.module.css";

interface FontawesomeButton {
    href: string;
  }


export const FontawesomeButton: React.FC<FontawesomeButton> = ({ href }) => {

    const handleClick = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        navigate(href);
      };

  return (
    <div>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon={faCoffee} className={styles.logoutButton}  />
      </button>
    </div>
  );
};
