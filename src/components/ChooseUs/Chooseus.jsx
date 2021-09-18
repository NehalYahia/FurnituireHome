import React, { Component } from 'react'
import Features from './Features'
import img1 from "../../images/Group 181.png"
import img2 from "../../images/noun_payment_2281176.png"
import img3 from "../../images/noun_guarantee_2519048.png"
import img4 from "../../images/noun_materials_308312.png"

export default class Chooseus extends Component {

    state = {
        features: [
            {
                img: img1,
                title: "Free Shipping",
                details:"All purchases over $399 are eligible for free shipping via UPS Pack and Ship."
            },
            {
                img: img2,
                title: "Easy Payments",
                details:"All payments are processed instantly over a secure payment protocol."
            },
            {
                img: img3,
                title: "Money-Back Guarantee",
                details:"If an item arrived damaged or you've changed your mind, you can send it back for a full refund."
            },
            {
                img: img4,
                title: "Finest Quality",
                details:"Designed to last, each of our products has been crafted with the finest materials."
            }

        ]
    }
    render() {
        return (
            <>
                <div className="container Chooseus py-5">
                    <p className="text-center">Why should you choose us?</p> 
                    <div className="row">
                        {
                            this.state.features.map((value, index) => {
                                return (
                                    <div key={index} className="col-3">

                                        <Features feature={value} />
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}
