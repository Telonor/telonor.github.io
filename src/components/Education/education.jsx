import React, { Component } from "react";
import cvData from "../../cv_data";
import EducationItem from "../EducationItem/education_item";

class Education extends Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col-12 nfo-group">Education</div>
                </div>

                {
                    cvData['education'].map(
                        (ed, idx) => <EducationItem key={idx} ed={ed}/>
                    )
                }
            </figure>
        )
    }
}

export default Education;