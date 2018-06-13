import React, { Component } from 'react';
import Mapping from './../Mapping/Mapping';
import './Category.css';

export default class Category extends Component {

    render() {
        return (
            <div className = 'category-flex'>
                <div className = 'event-block' >
                    <div className = 'event-box'>
                    <p>Event : </p>
                    <p>Date :</p>
                    <p>Time : </p>
                    <p>Price : </p>
                    </div>
                </div>
                <div>
                    <Mapping />
                </div>
            </div>
        )
    }
}