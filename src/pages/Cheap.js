import React, {useState, useEffect} from 'react';
import articlesData from "./datas/article-cheap.json";

import Rioprices from './Rio-prices';

 const ArticleList = () => {
      const [articles, setArticles] = useState([]);

      useEffect(() => {
        setArticles(articlesData); 
      }, []);

      return (
        <div id="cheap-page" className="article-page">
        <div className="just-article">
          {articles.map(article => (
            <div key={article.id}>
              <h2>{article.title}</h2>
              <div className="article-caption">
                {article.content}
              </div>
              <div id="data-container">
                <Rioprices />
              </div> 
            </div>
          ))}
        </div>
        </div>
      );
    };

export default ArticleList;





