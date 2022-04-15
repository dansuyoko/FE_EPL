import React, { useEffect, useState } from "react";
import Newss from "./Newss";

import './style.scss'
import { Button, Card,CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Navbar from "../../components/navbar";
import img2 from '../../assets/img/img1.jpg'
import axios from "axios";
const db = require('../../db.json')

export default function LatestNewsPage() {
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
    const [dataNews, setDataNews] = useState("")
    useEffect(() => {
        axios.get('http://localhost:8000/news')
        .then(result =>{
            console.log('data API', result.data);
            const responseAPI= result.data;

            setDataNews(responseAPI);
        })
        .catch(err=>{
            console.log('error', err);
        })
        getData();
    }, []);
    return(
        <div className="container-xxl px-md-5 bg-white shadow-lg home-page">
            < Navbar />
            <div className="col latest-news-section">
                <div className="row">
                    <div className="col-md-8 left-col">
                        {data.map((d) => {
                            return <Newss key={d._id} 
                            image = {`http://localhost:8000/${d.image}`}
                            title = {d.title}
                            body = {d.body}
                            />    
                        })}
                    </div>
                    <div className="col-md-3 right-col">
                        <div className="row right-header">
                            <h1>Most Viewed</h1>
                        </div>
                        {data.map((d) => (
                            <a href="#" key={d._id}>
                                <div className="row news-body">
                                    <div className="col news-headline">
                                        <h4 className="news-title">{d.title}</h4>
                                        <p className="news-content">{d.body}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}