import React, { Component } from "react";
import cvData from "../../cv_data";

import "./header.css";
import PDFRenderer from "../../pdf_render";

class Header extends Component {
    downloadCV() {
        let renderer = new PDFRenderer();
        renderer.render();
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
                        <button
                            className="btn btn-link download"
                            onClick={this.downloadCV}
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;