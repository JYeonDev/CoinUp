import axios from "axios";

export async function getMarket(dispatch) {
  dispatch({
    // 마켓 가져오기 시작
    type: "GET_MARKET",
  });
  try {
    // 마켓 가져오기 중
    const response = await axios.get("https://api.upbit.com/v1/market/all");
    dispatch({
      type: "GET_MARKET_SUCCESS",
      data: response.data,
    });

    // 마켓 리스트를 추출하여 웹소켓 실행
    const marketList = response.data
      .filter((list) => list.market.includes("KRW-"))
      .map((list) => list.market);
    const ws = new WebSocket("wss://api.upbit.com/websocket/v1");
    ws.onopen = () => {
      // 웹소켓 연결
      dispatch({
        type: "GET_REALTIME_DATA",
      });
      ws.send(
        `[{"ticket":"test"},{"type":"ticker","codes": ${JSON.stringify(
          marketList
        )}}]`
      );
    };
    ws.onmessage = async (e) => {
      // 실시간 데이터 수신
      const { data } = e;
      const text = await new Response(data).text();
      // console.log(JSON.parse(text));
      dispatch({
        type: "GET_REALTIME_DATA_SUCCESS",
        data: JSON.parse(text),
      });
    };
    ws.onerror = (e) => {
      // 실시간 데이터 수신 에러
      dispatch({
        type: "GET_REALTIME_DATA_ERROR",
        error: e,
      });
    };
  } catch (e) {
    // 마켓 가져오기 실패
    dispatch({
      type: "GET_MARKET_ERROR",
      error: e,
    });
  }
}
