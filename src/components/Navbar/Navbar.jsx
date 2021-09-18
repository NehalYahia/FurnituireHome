import React, { Component } from 'react'
import img from '../../images/noun_cloth_-1.png'
// import '../../test.scss'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <div className="nav_bg">
                    <div className="row navbar text-white">
                        <div className="col-3 p-0">
                            <img src={img} />
                            <p className="d-inline-block mx-3">E-Shop</p>

                        </div>
                        <div className="col-5 p-0">
                            <ul type="none">
                                <li>Products</li>
                                <li>Insipiration</li>
                                <li>Rooms</li>
                            </ul>
                        </div>
                        <div className="col-4 p-0">
                            <ul type="none">
                                <li><i class="fas fa-search"></i></li>
                                <li><i class="fas fa-shopping-cart"></i></li>
                                <li><i class="far fa-user"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
