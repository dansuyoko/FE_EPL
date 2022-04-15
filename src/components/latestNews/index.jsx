
import React, { useEffect, useState } from "react";

import './style.scss'
import img2 from '../../assets/img/img2.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button, Input } from "reactstrap";
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
            setData(response.data);
    };
    // const category = [];
    // db.news.map((d) => d.category.map((dd) => {if (!category.includes(dd)){category.push(dd)}}))
    
    useEffect(() => {
            axios.get('http://localhost:8000/news')
            .then(result=>{
                console.log('data API', result.data);
            })
            .catch(err =>{
                console.error('error', err);
            })
        getData();
    }, []);
    return (
        <div className="latest-news-section">
            <div className="row latest-news-row">
                {data.map((d) => (
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