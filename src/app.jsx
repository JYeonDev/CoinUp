import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import About from "./components/about/about";
import Header from "./components/header/header";
import Major from "./components/major/major";
import News from "./components/news/news";
import RealtimePrice from "./components/realtimePrice/realtimePrice";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="realtime" element={<RealtimePrice />} />
        <Route path="major" element={<Major />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
