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
function market(state = marketList, action) {
  let marketListCopy = [...state];
  if (action.type === "plus") {
    let same = state.findIndex((a) => {
      return a.market === action.payload.market;
    });
    if (same >= 0) {
      return alert("이미 관심종목에 있습니다");
    } else {
      // let marketListCopy = [...state];
      marketListCopy.unshift(action.payload);
      return marketListCopy;
    }
  }

  // let marketListCopy = [...state];
  if (action.type === "minus") {
    return marketListCopy.filter((el) => el.market == action.market);
  }

  return state;
}

console.log(marketList, "확인");

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
