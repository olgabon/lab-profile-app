import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";
import './Profile.css';


export default class Profile extends Component {
    constructor(props){
        super(props)

        this.state = {
            profilePic: ""
        }
        this.formRef = React.createRef(); // new
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault()
        let form = this.formRef.current // document.getElementById("theForm")
        let formData = new FormData(form) // new

        axios({
            url: "http://localhost:5000/users/update",
            data: formData,
            method: "post",
            headers: {'Content-Type': 'multipart/form-data' }, //new
            withCredentials: true
        })
        .then((user)=> {
            this.props.fetchUser()
        })
        .catch((user)=> {
            
        })
    }
    render() {
        
        return (
            <div className="profile-div">
            <div className="user-info-div">
                <h1>Profile</h1>
                <h3>Username</h3>
                <h2>{this.props.user.name}</h2>
                
                <form ref={this.formRef} onSubmit={this.submit}>
                <input  onChange={this.handleChange}
                        type="file" name="profilePic" 
                        value={this.state.profilePic}/>
                <button type="submit">Add image</button>
                </form>
                </div>
                <div className="img-div">
                { this.props.user.profilePic? 
                    <img id="profile-pic" src={`http://localhost:5000/images/${this.props.user.profilePic}`} alt=""/>
                    :
                    <h1>Please upload your profile picture</h1>
                }
                <Link onClick={this.props.logout}>Logout</Link>

                
                </div>
            </div>
        )
    }
}


