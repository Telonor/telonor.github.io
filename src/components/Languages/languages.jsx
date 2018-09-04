import React, { Component } from "react";
import cvData from "../../cv_data";
import Language from "../Language/language";

class Languages extends Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col-12 col-sm-3 nfo-group">Language skills</div>
                </div>

                {
                    cvData['languages'].map(
                        (lang, idx) => <Language key={idx} lang={lang}/>
                    )
                }
            </figure>
        )
    }
}

export default Languages;