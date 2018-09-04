import React, { Component } from "react";
import cvData from "../../cv_data";
import ExperienceItem from "../ExperianceItem/experiance_item";

class Experience extends Component {
    render() {
        return (
            <figure id="experience">
                <div className="row">
                    <div className="col-12 nfo-group">Experience</div>
                </div>

                {
                    cvData['experience'].map(
                        (exp, idx) => <ExperienceItem key={idx} exp={exp}/>
                    )
                }
            </figure>
        )
    }
}

export default Experience;