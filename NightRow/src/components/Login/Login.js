import React, { Component } from "react";
import { getUser } from './../../redux/reducer';
import { connect } from 'react-redux';

class Login extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let { user_name, picture, auth_id } = this.props.user;
    return (
      <div>
        <h2>Account Information:</h2>
        <hr />
        {user_name ? (
          <div>
            <img src={picture} alt="" />
            <p>Account Name: {user_name}</p>
            <p>Account Number: {auth_id}</p>
          </div>
        ) : (
          <p>Please login</p>
        )}
        <a href="http://localhost:3666/auth/logout">
          <button type="" className="">
            Logout
          </button>
        </a>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { getUser })(Login);