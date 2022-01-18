import axios from "axios";
import { useEffect, useState } from "react";
import MarketName from "../../upbit/data";
import styles from "./realtimePrice.module.css";

const RealtimePrice = () => {
  const [marketList, setMarketList] = useState([]);
  const [koreanName, setKoreanName] = useState([]);
  const [englishName, setEnglishName] = useState([]);

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
        for (let i = 0; i < 10; i++) {
          setMarketList(response.data[i].market);
          setKoreanName(response.data[i].korean_name);
          setEnglishName(response.data[i].english_name);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(marketList);
  console.log(koreanName);
  console.log(englishName);

  return <div>리얼타임</div>;
};

export default RealtimePrice;
