import React from 'react';
import {Route, Router} from "react-router-dom";
import './App.css';
import axios from 'axios';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

class App extends React.Component {

  constructor(){
    super()
    this.fetchUser = this.fetchUser.bind(this)
    this.logout = this.logout.bind(this)
  }
  state = {
    user: {},
    err: null
  }
  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = ()=> {
    axios({
      url: `http://localhost:5000/users/get-user`,
      method: "post",
      withCredentials: true
    })
    .then((response)=> {
      this.setState({
        user: response.data
        
      })
    })
    .catch(err=> {
      this.setState({
        err: err
      })
    })
  }

  logout() {
    axios({
      method: "post",
      withCredentials: true,
      url: `http://localhost:5000/users/logout`
    })
    .then((response)=> {
      this.setState({
        user: {}
      },()=> {
        this.props.history.push("/")
      })
    })
    .catch((err)=> {
      this.setState({
        err
      })
    })
  }

  render () {
    return (

      <div className="App">
        <header className="App-header">
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" render={(props)=> <Login {...props} fetchUser={this.fetchUser} />} />
        <Route path="/profile" render={(props)=><Profile {...props} fetchUser={this.fetchUser} user={this.state.user} logout={this.logout}/>}/>
        </header>
      </div>

    )
  }
}

export default App;
