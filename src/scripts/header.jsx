import React from "react";

import {Hostname} from "./base.jsx";

class HeaderMenu extends React.Component {
    render() {
        return (
            <ul>
                <li><button type="button">Download CV</button></li>
                <li><button type="button">Contact me</button></li>
            </ul>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <Hostname nickname={this.props.nickname}/>
                <HeaderMenu/>
            </header>
        )
    }
}

export {Header};