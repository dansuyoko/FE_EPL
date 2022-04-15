
import React, { useEffect, useState } from "react";

import './style.scss'
import img3 from '../../assets/img/img3.jpg'
const db = require('../../db.json')

export default function BreadCrumb() {
    return (
        <div className="breadcrumb-section">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">News</li>
                </ol>
            </nav>
        </div>

    )
}