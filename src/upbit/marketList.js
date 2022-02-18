import React, { memo, useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import WishList from "../components/wishlist/wishList";
import styles from "./marketList.module.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const MarketList = memo(({ marketList }) => {
  const store = useSelector((store) => store.market);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [randomNumber, setRandomNumber] = useState([
    Math.floor(Math.random() * 10000),
  ]);

  useEffect(() => {
    const random = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 10000));
    }, 10000);
  }, []);

  const [info, setInfo] = useState(Array(marketList.length).fill(false));

  const componentHide = false;
  const [wishList, setWishList] = useState([]);
  const [listPlus, setListPlus] = useState(false);
  console.log(listPlus);

  return (
    <div>
      {marketList
        .filter((market) => market.market.includes("KRW-"))
        .map((market, index) => {
          function click() {
            const newInfo = Array(market.market.includes("KRW-").length).fill(
              false
            );
            newInfo[index] = true;
            setInfo(newInfo);
            const newRandom = Array(Math.floor(Math.random() * 10000));
            newRandom[index] = Math.floor(Math.random() * 10000);
            setRandomNumber(newRandom);

            // console.log(market);
          }

          function wishListPlus() {
            setListPlus(true);
            dispatch({
              type: "plus",
              payload: {
                market: market.market,
                korean_name: market.korean_name,
                english_name: market.english_name,
              },
            });
            navigate("/wishlist");

            // const wishListCopy = [...wishList];
            // wishListCopy.push(<li>ㄹ이ㅏㄴ멀이ㅏ너미ㅏㄹ언ㅁ</li>);
            // setWishList(wishListCopy);
          }

          return (
            <div key={index}>
              <ListGroup className={styles.container}>
                <ListGroup.Item
                  className={styles.marketList}
                  onClick={click}
                  info={info[index]}
                  elmentIndex={index}
                >
                  {market.market} <span className={styles.vertical_bar}>|</span>{" "}
                  {market.korean_name}{" "}
                  <span className={styles.vertical_bar}>|</span>{" "}
                  {market.english_name}
                </ListGroup.Item>
                {info[index] ? (
                  <div className={styles.coinInfo}>
                    <div className={styles.price}>
                      현재가 : {randomNumber} 원
                    </div>
                    <div className={styles.plus} onClick={wishListPlus}>
                      +
                    </div>
                  </div>
                ) : null}
              </ListGroup>
            </div>
          );
        })}
      {componentHide ? <WishList wishList={wishList} /> : null}
    </div>
  );
});

export default MarketList;
