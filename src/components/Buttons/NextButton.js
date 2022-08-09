import React from "react";
import styles from "./NextButton.module.css";

const NextButton = ({ nextPage }) => {
  return (
    <button className={styles["next-btn"]} onClick={nextPage}>
      next
    </button>
  );
};

export default NextButton;
