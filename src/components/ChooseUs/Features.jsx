import React, { Component } from 'react'

export default class Features extends Component {
    render() {
        return (
            <>
                <div className="Features py-3">
                   <div className="img_bg my-3 d-flex justify-content-center">
                   <img src={this.props.feature.img} className="align-self-center"/>
                   </div>
                   <p className="m-0 font-weight-bold">{this.props.feature.title}</p>
                   <p className="details">{this.props.feature.details}</p>
                </div>  
            </>
        )
    }
}
