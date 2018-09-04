import React from "react";

import "./main_footer.css";

export default class MainFooter extends React.Component {
    render() {
        return (
            <figure className="main-footer">
                <div className="row">
                    <div className="col terminal-caret">[Telonor@localhost ~]$</div>
                </div>
            </figure>
        )
    }
}