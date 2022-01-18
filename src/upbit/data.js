import axios from "axios";
import { memo, useEffect, useState } from "react";
import React from "react";
import RealtimePrice from "../components/realtimePrice/realtimePrice";

const MarketName = () => {
  const [coinList, setCoinList] = useState([]);

  const options = {
    method: "GET",
    url: "https://api.upbit.com/v1/market/all",
    params: { isDetails: "false" },
    headers: { Accept: "application/json" },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <RealtimePrice coinList={coinList} />
    </>
  );
};
export default MarketName;
