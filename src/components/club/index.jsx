
import React, { useEffect, useState } from "react";

import './style.scss'
import img3 from '../../assets/img/img3.jpg'
import axios from "axios";
const db = require('../../db.json')

export default function Clubs() {
    const [data, setData] = useState([]);
    const [club, setClub] = useState([]);
    // const getClub = () => {
    //     setClub(db.clubs)
    // };
    const getData = async () => {
        const response = await axios.get('http://localhost:8000/club')
            setData(response.data);
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <section className="pb-4 pt-4">
                <div className="d-flex mb-2 clubs-header">
                    <h2>CLUBS</h2>
                </div>
                <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    {data.map((d) => (
                        <a href={`/news/${d._id}`}className="col text-center clubs-link" key={d._id}>
                            <div className="clubs-img">
                                <img src={`${d.logo}`} alt="" loading={"lazy"} />
                            </div>
                            <div className="pt-1">{d.name}</div>
                        </a>
                    ))}
                </div>
            </section>
        </>

    )
}