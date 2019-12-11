import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class ShowCar extends Component {
    
    render() {
        
        return(
            <>
            

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.data.image} />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                <li>
                    Brand = {this.props.data.brand}
                    <br/>
                    Model = {this.props.data.model}
                    <br/>
                    Year = {this.props.data.year}
                    <br/>
                    Price = ${this.props.data.price}
                    <br/>
                    Color = {this.props.data.color}
                    <br/>
                </li>
                <hr className="hr1"/>
            </Card.Text>
            <Button variant="primary">Delete</Button>
            </Card.Body>
            </Card>
            </>
        )
    }
}

