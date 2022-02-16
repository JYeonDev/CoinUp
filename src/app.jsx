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

const marketList = [];
const options = {
  method: "GET",
  url: "https://api.upbit.com/v1/market/all",
  params: { isDetails: "false" },
  headers: { Accept: "application/json" },
};

function market(state = marketList, action) {
  if (action.type === "plus") {
    const data = axios
      .request(options)
      .then(function (response) {
        marketList.push();
        console.log(response.data[0].market, "리스트");
      })
      .catch(function (error) {
        console.error(error);
      });
  }
}

console.log(marketList, "확인");

let basic = [{ id: 0 }, { id: 1 }];

function reducer(state = basic, action) {
  if (action.type === "idPlus") {
    let copy = [...state];
    copy[0].id++;
    return copy;
  } else {
    return state;
  }
}
let store = createStore(combineReducers({ reducer, market }));

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
