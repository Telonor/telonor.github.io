import React from "react";
import cvData from "./cv_data";


class Header extends React.Component {
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
                        <button className="btn btn-link" id="download-cv">Download CV</button>
                        <button className="btn btn-link" id="contact-me">Contact me</button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;