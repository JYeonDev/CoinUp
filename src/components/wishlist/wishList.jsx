import React, { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
import styles from "./wishList.module.css";

const WishList = () => {
  const store = useSelector((store) => store.market);
  console.log(store.length, "스토어");

  const [info, setInfo] = useState(Array(store.length).fill(false));

  return (
    <ListGroup>
      {store
        .filter((item) => item.market.includes("KRW-"))
        .map((item, idx) => {
          // console.log(item, "item", idx, "idx");
          // console.log(item, "아이템");
          return (
            <div>
              <ListGroupItem key={idx}>
                {item.market} <span className={styles.vertical_bar}>|</span>{" "}
                {item.korean_name}{" "}
                <span className={styles.vertical_bar}>|</span>{" "}
                {item.english_name}
              </ListGroupItem>
              <div>하이</div>
            </div>
          );
        })
        .splice(0, store.length)}
    </ListGroup>
  );
};

export default WishList;
