import React from "react";
import {Hostname} from "./base.jsx";

class Footer extends React.Component {
    render() {
        return <footer className="terminal-body">
            <Hostname nickname={this.props.nickname} additional="tail copyright.txt"/>
            <div>&copy;{this.props.timestamp}</div>
            <Hostname nickname={this.props.nickname}/>
        </footer>
    }
}

export {Footer};