import React from "react";    

function NewsArticle({data}){  
    return (
        <div className="news"> 
            <img src={data.urlToImage} width="300px" className="card-img-top" alt="..." />
            <h1 className="news__title">{data.title}</h1>
            <p className="news__description">{data.description}</p>
            <span className="news__author">{data.author}</span>
            <span className="news__published"> {data.publishedAt}</span><br/><br/>
            <a href={data.url} target="_blank">Read More</a>
        </div>
    )
}

export default NewsArticle;