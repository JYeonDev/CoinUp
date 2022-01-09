import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Header from "./components/header/header";
import News from "./components/news/news";
import RealtimePrice from "./components/realtimePrice/realtimePrice";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="realtime" element={<RealtimePrice />} />
        <Route path="news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
