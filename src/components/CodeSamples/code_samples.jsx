import React, {Component} from "react";
import cvData from "../../cv_data";
import CodeSample from "../CodeSample/code_sample";

class CodeSamples extends Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col nfo-group">Code samples</div>
                </div>

                {
                    cvData['code_samples'].map(
                        (sample, idx) => <CodeSample key={idx} sample={sample}/>
                    )
                }
            </figure>
        )
    }
}

export default CodeSamples;