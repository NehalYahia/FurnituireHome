import React, { Component } from 'react'
import img from '../../images/noun_cloth_-1.png'

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer p-5 container">
                    <div className="row">
                        <div className="col-6 ">
                            <p><img src={img} /> <span className="text-info">E-</span>Shop</p>
                            <p className="w-75 li">High quality Scandinavian furniture made from eco-friendly materials. Designed for modern, minimalist apartments</p>
                            <p></p>
                        </div>
                        <div className="col-2">
                            <p className="font-weight-bold">Shopping online</p>
                            <ul type="none" className="p-0">
                                <li>Order Status</li>
                                <li>Shipping and Delivery</li>
                                <li>Returns</li>
                                <li>Payment Options</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <p className="font-weight-bold">Information</p>
                            <ul type="none"  className="p-0">
                                <li>Gift Cards</li>
                                <li>Find a store</li>
                                <li>Newsletter</li>
                                <li>Bacome a member</li>
                                <li>Site feedback</li>
                            </ul>
                        </div>
                        <div className="col-2">
                            <p className="font-weight-bold">Contact</p>
                            <ul type="none"  className="p-0">
                                <li>store@uikit.com</li>
                                <li>Hotline: +1 131 138 138</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
