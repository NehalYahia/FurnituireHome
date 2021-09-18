import React, { Component } from 'react'

export default class ProductDetails extends Component {
    render() {
        return (
            <>
                <div className=" py-3">
                   <div className="img_bg my-3">
                   <img src={this.props.product.img} className="w-100 h-50"/>
                   </div>
                   <p className="m-0">{this.props.product.name}</p>
                   <p className="font-weight-bold">{this.props.product.price}</p>
                </div> 
            </>
        )
    }
}
