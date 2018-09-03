import React from "react";
import cvData from "./cv_data";


class Header extends React.Component {

    onDownloadClick() {
        alert('Under construction.');
    }

    render() {
        return (
            <header className="terminal">
                <div className="row">
                    <div className="col text-center">
                        <h1>{cvData['basic_info']['nickname']}@localhost:~</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-left">
                        <button className="btn btn-link" id="download-cv" onClick={this.onDownloadClick}>Download CV</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;