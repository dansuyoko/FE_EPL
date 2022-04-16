
import React, { useEffect, useState } from "react";

import './style.scss';
import img2 from '../../assets/img/img2.jpg';
import axios from "axios";
const db = require('../../db.json')

export default function MostViewedNews() {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await axios.get('http://localhost:8000/news')
            setData(response.data);
    };
    
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className="col-md-3 most-viewed-col">
        <div className="row most-viewed-header">
            <h1>Most Viewed</h1>
        </div>
        {data.map((d) => (
            <a href={`/news/${d._id}`} key={d._id}>
                <div className="row news-body">
                    <div className="col news-headline">
                        <h4 className="news-title">{d.title}</h4>
                        <p className="news-content">{`${d.body.substring(0,50)}. . .`}</p>
                    </div>
                </div>
            </a>
        ))}
    </div>

    )
}