
import React, { useEffect, useState } from "react";

import './style.scss';
import img2 from '../../assets/img/img2.jpg';
import axios from "axios";
const db = require('../../db.json')

export default function LatestNews() {
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
    return (
        <div className="latest-news-section">
            <div className="row latest-news-row">
                {data.slice(0, 4).map((d) => (
                    <a href={`/news/${d._id}`} className="col latest-news-link" key={d._id}>
                        <div className="latest-news-img shadow">
                            <img src={img2} alt="epl news" loading={"lazy"} />
                        </div>
                        <div className="pt-1">{d.title}</div>
                    </a>
                ))}
                <a href="/news" className="col latest-news-link">
                    <div className="latest-news-img shadow">
                        <img src={img2} alt="epl news" loading={"lazy"} />
                    </div>
                    <div className="pt-1">View All</div>
                </a>
            </div>
        </div>

    )
}