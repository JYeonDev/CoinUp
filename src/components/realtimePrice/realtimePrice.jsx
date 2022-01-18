import styles from "./realtimePrice.module.css";

const RealtimePrice = ({ coinList }) => {
  console.log("하이");
  return (
    <div>
      {/* {coinList.map((coin) => {
        <div key={coin.id}>
          {coin.market.includes("KRW") ? console.log(coin) : null}
        </div>;
      })} */}
    </div>
  );
};

export default RealtimePrice;
