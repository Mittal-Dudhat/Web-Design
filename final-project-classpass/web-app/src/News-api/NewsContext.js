import React ,{createContext, useEffect, useState} from 'react';
import axios from 'axios';
import News from './News';

export const NewsContext = React.createContext();

//fetch news api
export const NewsContextProvider =(props) =>{
    const [data, setData] = useState();
    const apiKey = "b2236ca3b3294f30b89b88c11bca04b1";

    useEffect(()=>{
        axios
        .get(`https://newsapi.org/v2/everything?q=Health&apiKey=${apiKey}`)
            .then(response => setData(response.data))
            .catch((error)=>console.log(error));
    },[]);

    return(
        <NewsContext.Provider value={{ data }}>
             <News />
        </NewsContext.Provider>
    );
};