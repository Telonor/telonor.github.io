import React, {Component} from "react";
import cvData from "./cv_data";


class Header extends Component {
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
                        <a
                            href={process.env.PUBLIC_URL + '/CV.pdf'}
                            download={cvData['basic_info']['fio']}
                            className="btn btn-link download"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;