import React, { Component } from "react";
import Homepage from "./../Homepage/Homepage";
import { getUser } from './../../redux/reducer';
import { connect } from 'react-redux';
import './Reservations.css';

class Reservations extends Component {

    componentDidMount() {
    this.props.getUser();
    }

  render() {
    let { user_name, picture } = this.props.user;

    return (
        
        <div>
            {user_name ? (
            <div className = 'reservation-flex'>
            <div className = 'left-block'>
                <div className = 'reservation-title'>
                    <h1>{user_name}'s</h1>
                    <h1>Reservations</h1>
                </div>
                <img 
                    className = 'profile-image' 
                    src={picture} alt="profile pic"
                />
            </div> 
            <div className = 'right-block'>
                <div className = 'reserved-event'>
                    <p>Event : </p>
                    <p>Date :</p>
                    <p>Time : </p>
                    <p>Address : </p>
                    <p>Price : </p>
                </div>
            </div>
            </div>
            ) : (
            <div>
                <p className = 'alert'>Please, login in order to be redirected to your reservations</p>.
                <Homepage/>
            </div>
            )} 
        </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  
  export default connect(mapStateToProps, { getUser })(Reservations);