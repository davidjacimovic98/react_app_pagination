import React from "react";
import styles from "./PrevButton.module.css";

const PrevButton = ({ prevPage }) => {
  return (
    <button className={styles["prev-btn"]} onClick={prevPage}>
      prev
    </button>
  );
};

export default PrevButton;
