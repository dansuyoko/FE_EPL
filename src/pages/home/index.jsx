import React, { useEffect, useState } from 'react';

import './style.scss';
import { Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import Navbar from '../../components/navbar';
import img1 from '../../assets/img/EPL.png';
import axios from 'axios';
import SubmitNews from '../../components/submitNews';
import LatestNews from '../../components/latestNews';
import Clubs from '../../components/club';
const db = require('../../db.json');

export default function HomePage() {
  const [data, setData] = useState([]);
  const getData = () => {
    setData(db.clubs);
  };
  // const getData = async () => {
  //     const response = await axios.get('http://localhost:8000/club')
  //         setData(response.data);
  // };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container-xxl px-md-5 bg-white shadow-lg home-page">
      <Navbar />
      <div className="row home-layout">
        <div className="col-12 col-lg-6">
          <img src={img1} alt="" srcSet="" className="d-block mx-lg-auto img-fluid" />
        </div>
        <div className="col-12 col-lg-6">
          <h1 className="display-5 fw-bold mb-3">EPL News Update</h1>
          <p className="lead">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start home-btn">
            <a href="/explore-latest" className="btn btn-outline-secondary btn-dark btn-lg px-4 me-md-2">
              Explore latest
            </a>
            <a href="/random-news" className="btn btn-outline-secondary btn-dark btn-lg px-4 me-md-2">
              Show Random
            </a>
          </div>
        </div>
      </div>
      <LatestNews />
      <Clubs />
      <SubmitNews />
    </div>
  );
}
