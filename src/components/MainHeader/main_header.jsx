import React, { Component } from "react";
import cvData from "../../cv_data";

export default class MainHeader extends Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col text-center">
                        {cvData['basic_info']['fio']}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {cvData['basic_info']['position']}
                    </div>
                </div>
            </figure>
        )
    }
}