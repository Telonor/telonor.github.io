import React, { Component } from "react";
import cvData from "../../cv_data";

export default class MainInfo extends Component {
    getAge(bdate) {
        return new Date().getFullYear() - new Date(
            bdate
        ).getFullYear();
    }

    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">Age</span>
                        {this.getAge(cvData['basic_info']['bday'])}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">City</span>
                        {cvData['basic_info']['city']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">Family status</span>
                        {cvData['basic_info']['family_status']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">E-mail</span>
                        {cvData['basic_info']['email']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">Skype</span>
                        {cvData['basic_info']['skype']}
                    </div>
                </div>
            </figure>
        )
    }
}