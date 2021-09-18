import React, { Component } from 'react'
import ProductDetails from './ProductDetails'
import img1 from "../../images/stock-photo-confident-in-his-style-full-length-of-good-looking-young-man-keeping-hand-in-pocket-and-looking-at-1.png"
import img2 from "../../images/Bez nazwy-5.png"
import img3 from "../../images/Bez nazwy-6.png"
import img4 from "../../images/Bez nazwy-7.png"

export default class AllProducts extends Component {
    state = {
        prodects: [
            {
                img: img1,
                name: "Ikofnor",
                price: "$169.99",
            },
            {
                img: img2,
                name: "Chair nonpolor",
                price: "$699.99",
            },
            {
                img: img3,
                name: "Skogsta",
                price: "$269.99",
            },
            {
                img: img4,
                name: "Nord comode",
                price: "$619.99",
            }

        ]
    }
    render() {
        return (
            <>
                <div className="container AllProducts py-5">
                    <p className="text-center">Products in today</p> 
                    <div className="row">
                        {
                            this.state.prodects.map((value, index) => {
                                return (
                                    <div key={index} className="col-3">

                                        <ProductDetails product={value} />
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
