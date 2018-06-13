import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css'

class Homepage extends Component {

    render() {
        let { user_name } = this.props.user;

        return (
            <div >
                <header>
                    <Link to='/' id = 'logo'>
                    <h1>Night Row</h1>
                    </Link>

                    <div className = 'leftie' >
                        <input
                        className= 'header-box search'
                        type='text'
                        placeholder='Search'/>
                        <Link to='/reservations' >
                        <button className= 'header-box'>
                        Reservations
                        </button>
                        </Link>
                        
                        <div>
                        {user_name ? (
                        <a href="http://localhost:3666/auth/logout">
                            <button className= 'header-box'>
                            Logout
                            </button>
                        </a>
                        ) : (
                        <a href={process.env.REACT_APP_LOGIN}>
                            <button className= 'header-box' >
                            Login
                            </button>
                        </a>
                        )}
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      user: state.user
    };
  }
  
  export default connect(mapStateToProps)(Homepage);


                    