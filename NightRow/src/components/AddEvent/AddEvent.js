import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom'

export default class AddEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: '',
            title: '',
            date: '',
            time: '',
            address: '',
            about: '',
            contact: '',
            price: ''
        }

        this.createEvent = this.createEvent.bind(this)
    }

    createEvent() {
        let { category, title, date, time, address, about, contact, price } = this.props
        let body = { category, title, date, time, address, about, contact, price }

        axios.post(`/api/event`, body)
            .then((res) => console.log(res.data))
    }

    render() {
        return (
            <div>
                <p>Category</p>
                <select name='category'>
                    <option value='outdoor'>Outdoor</option>
                    <option value='afterwork'>Afterwork</option>
                    <option value='clubbing'>Clubbing</option>
                    <option value='live'>Live</option>
                </select>
                <br />
                <p>Title</p>
                <input
                    type="text"
                    placeholder='Title'
                    onChange={(e) => this.setState({ title: e.target.value })} />
                <br />
                <p>Date</p>
                <input
                    type="text"
                    placeholder='Date'
                    onChange={(e) => this.setState({ date: e.target.value })} />
                <br />
                <p>Time</p>
                <input
                    type="text"
                    placeholder='Time'
                    onChange={(e) => this.setState({ time: e.target.value })} />
                <br />
                <p>Address</p>
                <input
                    type="text"
                    placeholder='Address'
                    onChange={(e) => this.setState({ address: e.target.value })} />
                <br />
                <p>About</p>
                <input
                    type="text"
                    placeholder='About'
                    onChange={(e) => this.setState({ about: e.target.value })} />
                <br />
                <p>Contact</p>
                <input
                    type="text"
                    placeholder='Contact'
                    onChange={(e) => this.setState({ contact: e.target.value })} />
                <br />
                <p>Price</p>
                <input
                    type="text"
                    placeholder='Price'
                    onChange={(e) => this.setState({ price: e.target.value })} />
                <br />
                <hr />

                <button
                    onClick={this.createEvent}>
                    Complete
                </button>

                <br />
            </div >
        )
    }
}

