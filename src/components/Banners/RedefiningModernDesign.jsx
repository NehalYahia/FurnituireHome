import React, { Component } from 'react'
import img from '../../images/CHA1252946-1_2048x.png'

export default class RedefiningModernDesign extends Component {
    render() {
        return (
            <>
                <div className="bg_RedefiningModernDesign ">
                    <img src={img} className="w-100 h-100" />
                    <div className="font-weight-bold">
                        <p className=" text-white ">Redefining the modern design </p>
                        <button className="btn btn-light rounded-pill p-2 font-weight-bold">CHECK MORE</button>
                    </div>

                </div>

            </> 
        )
    }
}
