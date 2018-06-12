import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Homepage extends Component {

    render() {
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
                        <button className= 'header-box'>
                        Reservations
                        </button>
                        <a
                        href={process.env.REACT_APP_LOGIN}
                        role='button'>
                        <button className= 'header-box' >
                            Login
                        </button>
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}


                    