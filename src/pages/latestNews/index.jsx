import React, { useEffect, useState } from "react";

import './style.scss'
import Navbar from "../../components/navbar";
import axios from "axios";
import MostViewedNews from "../../components/mostViewedNews";
const db = require('../../db.json')

export default function LatestNewsPage() {
    const [data, setData] = useState([]);
    const [club, setClub] = useState([]);
    // const getClub = () => {
    //     setClub(db.clubs)
    // };
    const getData = async () => {
        const response = await axios.get('http://localhost:8000/news')
        setData(response.data.sort((a,b)=>{
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        }));
    };
    // const category = [];
    // db.news.map((d) => d.category.map((dd) => {if (!category.includes(dd)){category.push(dd)}}))
    
    useEffect(() => {
        // getClub();
        getData();
    }, []);
    return(
        <div className="container-xxl px-md-5 bg-white shadow-lg home-page">
            < Navbar />
            <div className="col latest-news-section">
                <div className="row">
                    <div className="col-md-8 left-col">
                        {data.map((d) => (
                            <a href={`/news/${d._id}`} key={d._id}>
                                <div className="row latest-news-body">
                                    <div className="col-md-4 latest-news-pict-div">
                                        <img src={`http://localhost:8000/${d.image}`} alt="img" className="latest-news-pict"/>
                                    </div>
                                    <div className="col-md-8 latest-news-headline">
                                        <h2 className="latest-news-title">{d.title}</h2>
                                        <p className="latest-news-content">{d.body.length > 250 ? `${d.body.substring(0,250)}. . .` : d.body}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    <MostViewedNews />
                </div>
            </div>
        </div>
    )
}