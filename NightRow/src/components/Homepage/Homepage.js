import React, { Component } from 'react';
import Header from './Header';
import './Homepage.css'

export default class Homepage extends Component {

    render() {
        return (
            <div>

                <Header />

                <h2 className='promise'>
                    FIND AND RESERVE
                    <br/>
                    <div class='verticalFlip'>
                        <span>A LIVE CONCERT</span>
                        <span>A ROOFTOP PARTY</span>
                        <span>A HAPPY-HOUR</span>
                        <span>MUCH MORE...</span>
                    </div>
                    <br/>
                    RIGHT NOW.
                </h2>

        
                <main className = 'cat-flex hover'>
                    <button className = 'cat-box cat-1'>
                        OUTDOOR</button>
                    <button className = 'cat-box cat-2'>
                        AFTERWORK</button>
                    <button className = 'cat-box cat-3'>
                        CLUBBING</button>
                    <button className = 'cat-box cat-4'>
                        LIVE</button>
                </main>

            </div>
        )
    }
}