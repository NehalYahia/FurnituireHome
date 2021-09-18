import React, { Component } from 'react'
import img from '../../images/Bez nazwy-3.png'

export default class NewCollection extends Component {
    render() {
        return (
            <>
                <div className="bg_NewCollection">
                    <img src={img} className="w-100 h-100" />
                    <div className="font-weight-bold">
                        <p className="text-white font-weight-bold">New collection available now</p>
                        <button className="btn btn-light rounded-pill p-2 font-weight-bold ">View all</button>
                    </div>

                </div>
            </>
        )
    }
}
