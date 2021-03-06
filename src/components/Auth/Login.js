import React, { Component} from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios';
import LoginModal from './Modal/LoginModal';

class  Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }); 
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, this.state, {
      withCredentials: true,
    })
    .then((res) => {
      this.props.setCurrentUser(res.data.data);
      this.props.history.push('/profile');
    })
    .catch((err) => console.log(err));
  }

  render () {
    return(
      <LoginModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
  );
  };
};

export default withRouter(Login);