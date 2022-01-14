let socket = new WebSocket("wss://api.upbit.com/websocket/v1");

socket.onopen = function (e) {
  const options = { method: "GET", headers: { Accept: "application/json" } };
  socket.onopen = () => {
    let promise = fetch(
      "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
};
