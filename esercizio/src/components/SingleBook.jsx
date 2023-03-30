import { Component } from "react";
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button';


const SingleBook = function (props) {
    return (
        <Col xs={2} className="mb-3">
            <Card className="h-100 d-flex justify-content-between" key={props.libro.asin}>
                <Card.Img variant="top" src={props.libro.img} height="130px" />
                <Card.Body>
                    <Card.Title>{props.libro.title}</Card.Title>
                    <Button variant="primary">Scopri di più</Button>
                </Card.Body>
            </Card>
        </Col >
    )
}

export default SingleBook