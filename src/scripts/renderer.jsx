import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import cvData from './cv_data';
import Header from './header.jsx';
import Main from './main.jsx'

const root = document.getElementById('root');
const skills = cvData['skills'];

class Container extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default function render() {
    // set page title based on cvData
    document.title = cvData['basic_info']['fio'];

    // render page
    ReactDOM.render(
        <Container/>,
        document.getElementById('root')
    );
}