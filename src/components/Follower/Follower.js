import React from "react";
import styles from "./Follower.module.css";

const Follower = ({ avatar_url, html_url, login }) => {
  return (
    <div className={styles.follower}>
      <img src={avatar_url} alt={login} />
      <h4>{login}</h4>
      <a href={html_url}>view profile</a>
    </div>
  );
};

export default Follower;
