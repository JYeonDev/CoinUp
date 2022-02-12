import axios from "axios";
import React, { useEffect, useState } from "react";
import NewsItem from "../newsItem/newsItem";
import styles from "./news.module.css";

const News = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?q=bitcoin&apiKey=6e634c77ed5e40bc8a0c26cd66b62904"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // 대기중
  if (loading) {
    return <div className={styles.newsList}>...대기중</div>;
  }

  // articles 값 설정되지 않았을 때
  if (!articles) {
    return null;
  }

  // articles 값이 유효할 때
  return (
    <div className={styles.newsList}>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default News;
