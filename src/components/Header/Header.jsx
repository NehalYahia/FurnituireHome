import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import img from '../../images/apartment-architecture-carpet-276583.png'
export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-touch="false" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img} classNameName="w-100 h-100" />
                            </div>
                            <div className="carousel-item">
                                <img src={img} classNameName="w-100 h-100" />
                            </div>
                            <div className="overlay w-100 h-100"></div>
                        </div>
                        <div className="carsoulControl">
                            <a className="carousel-control-prev  " href="#carouselExampleControlsNoTouching" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"><i class="fas fa-arrow-left"></i></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControlsNoTouching" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"><i class="fas fa-arrow-right"></i></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div className="main_h1 w-50">
                        <p>Make your house into a home</p>
                        <a><span className="d-inline-block bg-info rounded-circle p-2 mx-1"><i class="fas fa-long-arrow-alt-right"></i></span> Shop now</a>
                    </div>


                    <div className="header_bottom bg-white p-3">
                        <div className="row">
                            <div className="col-4 d-flex justify-content-center p-0">
                            <p className="align-self-center"><i class="fas fa-truck-moving "></i></p>
                                <div className="mx-4">
                                    <p className="title font-weight-bold">Free Shipping</p>
                                    <p className="details text-black-50">On purchases over $399</p>
                                </div>

                            </div>
                            <div className="col-4 d-flex justify-content-center p-0">
                                <p className="align-self-center "><i class="far fa-smile-beam"></i></p>
                                <div className="mx-4">
                                    <p className="title font-weight-bold">99% Satisfied Customers</p>
                                    <p className="details text-black-50">Our clients' opinions speak for themselves</p>
                                </div>
                            </div>
                            <div className="col-4 d-flex justify-content-center p-0">
                            <p className="align-self-center"><i class="fas fa-dollar-sign"></i></p>
                                <div className="mx-4">
                                    <p className="title font-weight-bold">Originality Guaranteed</p>
                                    <p className="details text-black-50">2 years warranty for each product from our store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

















            </>
        )
    }
}

