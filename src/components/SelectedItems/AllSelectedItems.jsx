import React, { Component } from 'react'
import SelectedItem from './SelectedItem'
import img1 from "../../images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-720914785.png"
import img2 from "../../images/Bez nazwy-2.png"
import img3 from "../../images/Bez nazwy-1.png"
import img4 from "../../images/Bez nazwy-4.png"

export default class AllSelectedItems extends Component {
    state = {
        prodects: [
            {
                id:1,
                img: img1,
                name: "Holmustund",
                price: "$1999.99",
                discount: ""
            },
            {
                id:2,
                img: img2,
                name: "Farlov",
                price: "$699.99",
                discount: "$999.99"
            },
            {
                id:3,
                img: img3,
                name: "Evertosomberg",
                price: "$269.99",
                discount: ""
            },
            {
                id:4,
                img: img4,
                name: "Eurosofa",
                price: "$619.99",
                discount: ""
            }

        ]
    }
    render() {
        return (
            <>
                <div className="container AllSelectedItems py-5">
                    <p>Selected just for you</p> 
                    <button className="btn btn-light rounded-pill py-3 px-5 font-weight-bold">Show more</button>
                    <div className="row">
                        {
                            this.state.prodects.map((value, index) => {
                                return (
                                    <div key={index} className="col-3">

                                        <SelectedItem items={value} />
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
