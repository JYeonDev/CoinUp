import axios from "axios";
import { useEffect, useState } from "react";

import MarketList from "../../upbit/marketList";

import styles from "./realtimePrice.module.css";

const RealtimePrice = () => {
  const [marketList, setMarketList] = useState([]);

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
        setMarketList(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <MarketList marketList={marketList} />
    </div>
  );
};

export default RealtimePrice;
