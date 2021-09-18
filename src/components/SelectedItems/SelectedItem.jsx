import React, { Component } from 'react'

export default class SelectedItem extends Component {
    render() {
        return (
            <>
               <div className="SelectedItem py-3">
                   <div className="img_bg my-3">
                   {this.props.items.discount!= 0  ?<span className="d-inline-block px-3 py-2 m-3 rounded-pill text-white font-weight-bold">30%</span>:""}
                       
                   <img src={this.props.items.img} className="w-100 h-50"/>
                   </div>
                   <p className="m-0">{this.props.items.name}</p>

                   <p className="font-weight-bold"><span className={`${this.props.items.discount}`!= 0  ?"price":""}>{this.props.items.price}</span> <span className="discount"> {this.props.items.discount}</span></p>
                </div> 
            </>
        )
    }
}
