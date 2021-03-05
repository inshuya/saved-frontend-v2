import React, { Component } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainImage from '../MainImage.jpg';
import './login.css';

export default class Login extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-9">
                <img src={MainImage} class="mainimage" alt="logo"/>
                </div>
                <div class="col-3">
                    <div style={{flexDirection:"column",marginTop:50, marginRight: 50}}>
                    <Form>
                        <h3>Sign In</h3> <br/>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <br/>
                        <Link to="/home" style={{textDecoration:'none'}}>
                                                    
                        <Button variant="btn btn-dark btn-lg btn-block" type="submit">
                            Sign In
                        </Button>
                        </Link>
                        <p className="forgot-password text-right">
                                New Here? <Link to="/sign-up">Register!</Link>
                            </p>
                    </Form>
                    </div>
                </div>
            </div>
            
        );
    }
}

