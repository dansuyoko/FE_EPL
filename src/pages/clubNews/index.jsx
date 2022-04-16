import React, { useEffect, useState } from "react";

import './style.scss'
import Navbar from "../../components/navbar";
import img2 from '../../assets/img/img1.jpg'
import axios from "axios";
import MostViewedNews from "../../components/mostViewedNews";
const db = require('../../db.json')

export default function ClubNewsPage() {
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
            <div className="col club-news-section">
                <div className="row">
                    <div className="col-md-8 left-col">
                        {data.map((d) => (
                            <a href={`/news/${d._id}`} key={d._id}>
                                <div className="row news-body">
                                    <div className="col-md-4 news-pict-div">
                                        <img src={img2} alt="img" className="news-pict"/>
                                    </div>
                                    <div className="col-md-8 news-headline">
                                        <h2 className="news-title">{d.title}</h2>
                                        <p className="news-content">{`${d.body.substring(0,250)}. . .`}</p>
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