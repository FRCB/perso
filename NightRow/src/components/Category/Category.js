import React, { Component } from 'react';
import './Category.css';
import { GoogleApiWrapper } from 'google-maps-react' 
import MapContainer from './../MapContainer/MapContainer'
import axios from 'axios';
import Event from './../Event/Event';

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: []
        }

        this.getCategory = this.getCategory.bind(this)
    }

    componentDidMount() {
        this.getCategory();
    }

    getCategory(title, date, hour, price) {
        const body = {
            title: title,
            date: date,
            hour: hour, 
            price: price
        }
        axios.get(`/api/category/${this.props.match.params.category}`, body)
        .then((res) => this.setState({events: res.data}))
    }

    render() {
        let mappedEvents = this.state.events.map((event, i) => {

            return (
                <div key={i}>                 
                    <Event
                        event = { event }
                        getCategory = {this.getCategory}
                    />
                </div>
            )
        })

        return (
            <div className = 'category-flex'>
                <div className = 'event-block' >
                    <div className = 'event-box'>
                    { mappedEvents }
                    </div>
                </div>
                <div>
                    <MapContainer 
                    google={this.props.google} />
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyACchz5l-d5fJ_RTwK8BuJhbqYdzhFD-5M'})(Category)