import React, { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";
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
                        <form class="mt-8">
                            <h3>Log in</h3>
                            <br/>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                            <p className="forgot-password text-right">
                                New Here? <Link to="/sign-up">Register!</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}