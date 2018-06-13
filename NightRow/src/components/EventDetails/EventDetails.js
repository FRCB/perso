import React, { Component } from 'react';
import './EventDetails.css';
import axios from 'axios';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: [{}]
        }

        this.getEvent = this.getEvent.bind(this)
    }

    componentDidMount() {
        this.getEvent();
    }

    getEvent(title, date, time, address, about, contact, price) {
        const body = {
            title: title,
            date: date,
            time: time,
            address: address,
            about: about,
            contact: contact,
            price: price
        }
        axios.get(`/api/event/${this.props.match.params.id}`, body)
            .then((res) => this.setState({ event: res.data }))
    }

    deleteEvent(id) {
        axios.delete(`/api/event/${id}`)
            .then(this.getEvent())
            .then((res) => res.redirect(`http://localhost:3000/#/${this.props.match.params.id}`))
    }

    render() {
        return (
            <div>
                <h1>{this.state.event[0].event_title} </h1>
                <hr />
                <p>{this.state.event[0].event_date}</p>
                <p>{this.state.event[0].event_time}</p>
                <p>{this.state.event[0].event_address}</p>
                <hr />
                <p>{this.state.event[0].event_about}</p>
                <hr />
                <p>{this.state.event[0].event_contact}</p>
                <p>{this.state.event[0].event_price}</p>
                <hr />
                <button
                    onClick={() => this.deletePost(this.state.event[0].event_id)}>
                    Delete
                </button>
                <button>
                    Edit
                </button>
            </div>
        );
    }
}