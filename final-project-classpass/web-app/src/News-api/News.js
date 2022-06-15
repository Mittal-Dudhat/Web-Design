import React,{ useContext} from "react";
import {NewsContext} from './NewsContext';
import NewsArticle from "./NewsArticle";
import './NewsArticle.scss'

function News(props){
    const {data} = useContext(NewsContext);    
    return (
            <div className="all__news"> 
            {data ? data.articles.map(news => <NewsArticle data={news} key={news.url}/>)  : "loading" }
            </div>
    );
}

export default News;