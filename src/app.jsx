import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Major from "./components/major/major";
import News from "./components/news/news";
import RealtimePrice from "./components/realtimePrice/realtimePrice";
import Wallet from "./components/wallet/wallet";
import WishList from "./components/wishlist/wishList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="realtime" element={<RealtimePrice />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="major" element={<Major />} />
        <Route path="news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
