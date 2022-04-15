import React, { useEffect, useState } from "react";
import axios from "axios";
import RichTextEditor from '../../components/RichTextEditor';

import './style.scss'
import { Button, Card,CardImg, CardBody, CardTitle, CardText, Form, Label, Input } from "reactstrap";
import Navbar from "../../components/navbar";
import img3 from '../../assets/img/img1.jpg';
import BreadCrumb from "../../components/breadcrumb";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";
const db = require('../../db.json');


export default function SubmitPage() {
    const [value, setValue] = useState("");
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
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Submit news</h1>
                <div className="cccol-lg-6 mx-auto">
                    <p className="lead">Share your knowledge about epl</p>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-8">
                    <Form action="/submit-news" encType="multipart/form-data" method="post">
                        <div className="row g-3">
                            <div className="col-12">
                                <Label htmlFor="image" className="form-label">header</Label>
                                <Input type="file" className="form-control" name="image" accept="image/*"/>
                            </div>
                            <div className="col-12">
                                <Label htmlFor="title" className="form-label">title</Label>
                                <Input type="text" name="title" id="title" />
                            </div>
                            <div className="col-12">
                                <RichTextEditor setValue={setValue}/>
                            </div>
                            <div className="col-12">
                                <Label htmlFor="category" className="form-label">category</Label>
                                <Input type="text" name="category" id="category" />
                            </div>
                            <div className="col-12">
                                <Label htmlFor="club" className="form-label">club</Label>
                                <Input type="text" name="club" id="club" />
                            </div>
                            <div className="col-12">
                                <Button type="submit" className="btn btn-primary" id="addNews">submit news</Button>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}