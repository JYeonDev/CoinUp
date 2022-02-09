import React from "react";
import styles from "./exchangeList.module.css";

const ExchangeList = ({ item }) => {
  console.log(item);
  return <ul>{item}</ul>;
};

export default ExchangeList;
