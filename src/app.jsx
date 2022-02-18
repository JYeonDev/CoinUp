import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Major from "./components/major/major";
import News from "./components/news/news";
import RealtimePrice from "./components/realtimePrice/realtimePrice";
import Wallet from "./components/wallet/wallet";
import WishList from "./components/wishlist/wishList";
import axios from "axios";

const options = {
  method: "GET",
  url: "https://api.upbit.com/v1/market/all",
  params: { isDetails: "false" },
  headers: { Accept: "application/json" },
};

const data = axios
  .request(options)
  .then(function (response) {
    let length = response.data.length;
    let i;
    for (i = 0; i <= length; i++) {
      marketList.push({
        market: response.data[i].market,
        korean_name: response.data[i].korean_name,
        english_name: response.data[i].english_name,
      });
    }
    console.log(marketList, "data");
    console.log(response.data.length + 1, "길이");
  })
  .catch(function (error) {
    console.error(error);
  });

const marketList = [];
console.log(marketList, "data2");
function market(state = marketList, action) {
  if (action.type === "plus") {
    let marketListCopy = [...state];
    marketListCopy.push(action.payload);
    return marketListCopy;
  }
  return state;
}

console.log(marketList, "확인");

// let basic = [{ id: 0 }, { id: 1 }];

// function reducer(state = basic, action) {
//   if (action.type === "idPlus") {
//     let copy = [...state];
//     copy[0].id++;
//     return copy;
//   } else {
//     return state;
//   }
// }
let store = createStore(combineReducers({ market }));

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="realtime" element={<RealtimePrice />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="major" element={<Major />} />
          <Route path="news" element={<News />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
