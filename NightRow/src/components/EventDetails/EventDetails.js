import React, { Component } from 'react';
import './EventDetails.css';
import axios from 'axios';

export default class EventDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            .then((res) => this.setState({
                editTitle: res.data[0].event_title,
                editDate: res.data[0].event_date,
                editTime: res.data[0].event_time,
                editAddress: res.data[0].event_address,
                editAbout: res.data[0].event_about,
                editContact: res.data[0].event_contact,
                editPrice: res.data[0].event_price
            }))
    }

    toggleEdit() {
        if (this.state.toggleBtn) {
            this.editEvent(this.state.editTitle, this.state.editDate, this.state.editTime, this.state.editAddress, this.state.editAbout, this.state.editContact, this.state.editPrice)
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
                this.setState({
                    editTitle: res.data[0].event_title,
                    editDate: res.data[0].event_date,
                    editTime: res.data[0].event_time,
                    editAddress: res.data[0].event_address,
                    editAbout: res.data[0].event_about,
                    editContact: res.data[0].event_contact,
                    editPrice: res.data[0].event_price
                })
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
                                <h1>{this.state.editTitle}</h1>
                                <hr />
                                <p>{this.state.editDate}</p>
                                <p>{this.state.editTime}</p>
                                <p>{this.state.editAddress}</p>
                                <hr />
                                <p>{this.state.editAbout}</p>
                                <hr />
                                <p>{this.state.editContact}</p>
                                <p>{this.state.editPrice}</p>
                            </div>
                            :
                            <div>
                                <input
                                    value={this.state.editTitle}
                                    onChange={(e) => this.setState({ editTitle: e.target.value })} />
                                <input
                                    value={this.state.editDate}
                                    onChange={(e) => this.setState({ editDate: e.target.value })} />
                                <input
                                    value={this.state.editTime}
                                    onChange={(e) => this.setState({ editTime: e.target.value })} />
                                <input
                                    value={this.state.editAddress}
                                    onChange={(e) => this.setState({ editAddress: e.target.value })} />
                                <input
                                    value={this.state.editAbout}
                                    onChange={(e) => this.setState({ editAbout: e.target.value })} />
                                <input
                                    value={this.state.editContact}
                                    onChange={(e) => this.setState({ editContact: e.target.value })} />
                                <input
                                    value={this.state.editPrice}
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