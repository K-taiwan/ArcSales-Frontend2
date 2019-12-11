import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Car.css';

export default class CarGallery extends Component {

    render() {

        return ( 
        
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ this.props.car.image} />
            <Card.Body>
            <Card.Title>{this.props.car.model}</Card.Title>
            <Card.Text>
                <ul>
                <li>
                    Brand = {this.props.car.brand}
                    <br/>
                    Year = {this.props.car.year}
                    <br/>
                    Price = ${this.props.car.price}
                    <br/>
                    Color = {this.props.car.color}
                    <br/>
                </li>
                </ul>
                <hr className="hr1"/>
            </Card.Text>
            <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
        </div>
        
        )
    
    }

}