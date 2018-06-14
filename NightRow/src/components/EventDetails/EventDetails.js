import React, { Component } from 'react';
import './EventDetails.css';
import axios from 'axios';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            event: [{}],
            toggleBtn: false,
            editTitle: '',
            editDate: '',
            editTime: '',
            editAddress: '',
            editAbout: '',
            editContact: '',
            editPrice: ''
        }

        this.getEvent = this.getEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)

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

    toggleEdit() {
        if (this.state.toggleBtn) {
            this.editEvent(this.state.event[0].event_id, this.state.editTitle, this.state.editDate, this.state.editTime, this.state.editTime, this.state.editAddress, this.state.editAbout, this.state.editContact, this.state.editPrice)
        }
        this.setState({ toggleBtn: !this.state.toggleBtn })
    }

    editEvent(title, date, time, address, about, contact, price) {
        const body = {
            title: title,
            date: date,
            time: time,
            address: address,
            about: about,
            contact: contact,
            price: price
        }
        axios.put(`/api/event/${this.props.match.params.id}`, body)
            .then(res => {
                console.log(res.data)
                this.setState({ events: res.data })
            })
            .then(this.getEvent())
    }

    deleteEvent(id) {
        axios.delete(`/api/event/${id}`)
            .then(this.getEvent())
            .then((res) => res.redirect(`http://localhost:3000/#/${this.props.match.params.id}`))
    }

    render() {
        return (
            <div>
                <div>
                    {
                        !this.state.toggleBtn
                            ?
                            <div>
                                <h1>{this.state.event[0].event_title}</h1>
                                <hr />
                                <p>{this.state.event[0].event_date}</p>
                                <p>{this.state.event[0].event_time}</p>
                                <p>{this.state.event[0].event_address}</p>
                                <hr />
                                <p>{this.state.event[0].event_about}</p>
                                <hr />
                                <p>{this.state.event[0].event_contact}</p>
                                <p>{this.state.event[0].event_price}</p>
                            </div>
                            :
                            <div>
                                <input
                                    value={this.state.event[0].event_title}
                                    onChange={(e) => this.setState({ editTitle: e.target.value })} />
                                <input
                                    value={this.state.event[0].event_date}
                                    onChange={(e) => this.setState({ editDate: e.target.value })} />
                                <input
                                    value={this.state.event[0].event_time}
                                    onChange={(e) => this.setState({ editTime: e.target.value })} />
                                <input
                                    value={this.state.event[0].event_address}
                                    onChange={(e) => this.setState({ editAddress: e.target.value })} />
                                <input
                                    value={this.state.event[0].event_about}
                                    onChange={(e) => this.setState({ editAbout: e.target.value })} />
                                <input
                                    value={this.state.event[0].event_contact}
                                    onChange={(e) => this.setState({ editContact: e.target.value })} />
                                <input
                                    value={this.state.event[0].event_price}
                                    onChange={(e) => this.setState({ editPrice: e.target.value })} />
                            </div>
                    }
                    <hr />
                    <button
                        onClick={() => this.deletePost(this.state.event[0].event_id)}>
                        Delete
                    </button>
                    <button
                        onClick={() => this.toggleEdit()}>
                        {this.state.toggleBtn ? "Save" : "Edit"}
                    </button>
                </div>
            </div>
        );
    }
}