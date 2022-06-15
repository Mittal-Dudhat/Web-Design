import React, {useState} from 'react'
import { questions } from "./faqquestion";
import MyAccordian from './MyFAQ';
import './FAQ.scss';
import Header from '../HomePage/Header';
import Footer from '../HomePage/footer';

const FAQ = () => {
    const [data, setData] = useState(questions);
    return (
        <div>
            <section className="main-div">
                <Header/>
                <h1>Classpass FAQ's</h1>
        {
                data.map((curElem) => {
                    return <MyAccordian key={curElem.id} {...curElem} />
                    //here the spread operator is use to pass the the properties of the questions api
                })        
        }       
                
                 </section>
                 <div className='faq-footer'>
                    <Footer/>
                 </div>
        </div>
    )
}

export default FAQ;