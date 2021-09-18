import React, { Component } from 'react'
import NewCollection from './NewCollection'
import RedefiningModernDesign from './RedefiningModernDesign'

export default class Banners extends Component {
    render() {
        return (
            <>
                <div className="container my-5 ">
                    <div className="row">
                        <div className="col-6 p-0">
                            <NewCollection  />

                        </div>
                        <div className="col-6 p-0">
                            <RedefiningModernDesign />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
