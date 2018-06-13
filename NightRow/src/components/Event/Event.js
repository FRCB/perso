import React, { Component } from 'react';
import './Event.css'

export default class Event extends Component {

render() {
    return (
        <div className = 'event-border'>
            <div>
                <p className = 'list-title'>Event : 
                <p className = 'list-content'>{this.props.event.event_title} </p>
                </p>
            </div>  
            <div>
                <p className = 'list-title'>Date : 
                <p className = 'list-content'>{this.props.event.event_date} </p>
                </p>
            </div> 
            <div>
                <p className = 'list-title'>Time : 
                <p className = 'list-content'>{this.props.event.event_time} </p>
                </p>
            </div> 
            <div>
                <p className = 'list-title'>Price : 
                <p className = 'list-content'>{this.props.event.event_price} </p>
                </p>
            </div> 
        </div>
        );
    }
}
    
