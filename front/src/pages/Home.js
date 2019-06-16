import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom';
import './Home.css';


export default class Home extends Component {
    render() {
        return (
            <div className="text-div">
                <h1>Iron Profile</h1>
                <p>Today we will create an app with authorization, adding some cool styles!</p>
                <div className="buttons">
                <Link to={"/signup"}>Sign up</Link> <br/>
                <Link to={"/login"}>Log in</Link>
                </div>
            </div>
        )
    }
}
