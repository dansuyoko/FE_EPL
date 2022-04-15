import React, { useEffect, useState } from "react";
import axios from "axios";

import './style.scss'
import { Button, Card,CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import Navbar from "../../components/navbar";
import img3 from '../../assets/img/img1.jpg';
import BreadCrumb from "../../components/breadcrumb";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
const db = require('../../db.json')

export default function NewsPage() {
    const [data, setData] = useState([]);
    const params = useParams();
    const getData = async () => {
        const response = await axios.get(`http://localhost:8000/news/${params._id}`)
            setData(response.data);
    };

    // const getData = () => {
    //     setData(db.clubs)
    // };
    
    useEffect(() => {
        getData();
    }, []);
    return(
        <div className="container-xxl px-md-5 bg-white shadow-lg home-page">
            <Navbar />
            <BreadCrumb />
            <section className="px-4 py-5 submit-section">
                <img src={img3} alt="Publish your news" className="d-block mx-auto mb-4 img-fluid" width={566} height={208} loading={"lazy"}/>
                <h1 className="display-5 fw-bold">{data.title}</h1>
                <div className="col-12 mb-4">
                    <FontAwesomeIcon icon={faTags}/> {data.category}
                </div>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">{data.body}</p>
                </div>
            </section>
        </div>
    )
}