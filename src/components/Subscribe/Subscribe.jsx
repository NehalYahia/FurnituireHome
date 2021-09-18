import React, { Component } from 'react'

export default class Subscribe extends Component {
    render() {
        return (
            <>
                <div className="container Subscribe my-5">
                    <div className="overlay w-100 h-100"></div>

                    <div className="row Subscribe_content">
                        <div className="col-6">
                            <p className="m-5 text-white ">Subscribe to our newsletter and receive exclusive offers every week</p>
                        </div>
                        <div className="col-6 align-self-center">
                            <input type="text" placeholder="Enter your email" className="rounded-pill py-3 px-4 w-50 mx-3"/>
                            <button className="btn btn-info rounded-pill py-3 px-4 font-weight-bold">SUBSCRUBE</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
