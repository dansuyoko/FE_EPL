import React, { useEffect, useState } from "react";

import './style.scss'
import Navbar from "../../components/navbar";
import axios from "axios";
import MostViewedNews from "../../components/mostViewedNews";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadcrumb";
const db = require('../../db.json')

export default function ClubListPage() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState("");
    const [club, setClub] = useState([]);
    const params = useParams();
    // const getClub = () => {
    //     setClub(db.clubs)
    // };
    const getData = async () => {
        const response = await axios.get('http://localhost:8000/club')
        setData(response.data);
    };
    useEffect(() => {
        // getClub();
        getData();
        setPage("club")
    }, []);
    return(
        <div className="container-xxl px-md-5 bg-white shadow-lg home-page">
            < Navbar />
            < BreadCrumb 
                page = {page}/>
            <div className="col club-list-section">
                <div className="row">
                    <div className="col-md-8 left-col">
                        {data.map((d) => (
                            <a href={`/club/${d.name}`} key={d._id}>
                                <div className="row club-list-body">
                                    <div className="col-md-4 club-list-pict-div">
                                        <img src={d.logo} alt="img" className="club-list-pict"/>
                                    </div>
                                    <div className="col-md-8 club-list-headline">
                                        <h3 className="club-list-title">{d.name}</h3>
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