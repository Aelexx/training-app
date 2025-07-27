import React, {useState, useEffect} from 'react';
import articlesData from "./datas/article-safe.json";

 const ArticleList = () => {
      const [articles, setArticles] = useState([]);

      useEffect(() => {
        // In a real application, you might fetch data from an API here.
        // For local JSON, directly set the state.
        setArticles(articlesData); 
      }, []);

      return (
        <div id="safe-page" className="article-page">
        <div className="just-article">
          {articles.map(article => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <div className="article-caption">
                {article.content}
              </div>
            </div>
          ))}
        </div>
        </div>
      );
    };

export default ArticleList;




