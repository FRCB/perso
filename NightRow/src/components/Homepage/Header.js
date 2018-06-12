import React, { Component } from 'react';
import './Header.css'

export default class Homepage extends Component {

    render() {
        return (
            <div >
                <header>
                    <h1 id = 'logo' >Night Row</h1>
                    <div className = 'leftie' >
                        <input
                        className= 'header-box search'
                        type='text'
                        placeholder='Search'/>
                        <h4 className= 'header-box'>
                        Reservations
                        </h4>
                        <a className= 'header-box'
                        href={process.env.REACT_APP_LOGIN}>
                        <button>Login</button> 
                        </a>
                    </div>
                </header>
            </div>
        )
    }
}


                    