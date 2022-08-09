import React, { useState, useEffect } from "react";
import Loading from "../Loading/Loading";
import styles from "./ListOfFollowers.module.css";
import Follower from "../Follower/Follower";
import paginate from "../../paginate/paginate";
import PrevButton from "../Buttons/PrevButton";
import NextButton from "../Buttons/NextButton";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const ListOfFollowers = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    setData(paginate(data));
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  const handlePage = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = data.length - 1;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = 0;
      }
      return prevPage;
    });
  };

  return (
    <div>
      {loading ? <Loading /> : <h1 className={styles.heading}>pagination</h1>}
      <div className={styles.followers}>
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </div>
      {!loading && (
        <div className={styles["btn-container"]}>
          <PrevButton prevPage={prevPage} />
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`${styles["page-btn"]} ${
                  index === page && styles["active-btn"]
                }`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <NextButton nextPage={nextPage} />
        </div>
      )}
    </div>
  );
};

export default ListOfFollowers;
