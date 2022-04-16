
import React, { useEffect, useState } from "react";

import './style.scss'
import img3 from '../../assets/img/img3.jpg'
const db = require('../../db.json')

export default function SubmitNews() {
    const [club, setClub] = useState([]);
    const getClub = () => {
        setClub(db.clubs)
    };
    const category = [];
    db.news.map((d) => d.category.map((dd) => {if (!category.includes(dd)){category.push(dd)}}))
    
    useEffect(() => {
        getClub();
    }, []);
    console.log(category);
    return (
        <>
            <section className="px-4 py-5 submit-section">
                <img src={img3} alt="Publish your news" className="d-block mx-auto mb-4 img-fluid" width={566} height={208} loading={"lazy"}/>
                <h1 className="display-5 fw-bold">Publish your news</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">publish what you know about epl</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center submit-btn">
                        <a href="/submit/62589ba3049589abd7ef2bba" className="btn btn-outline-secondary btn-dark btn-lg">Submit News</a>
                    </div>
                </div>
            </section>
        </>

    )
}