import React from 'react';
import ReactDOM from 'react-dom';

import cvData from './cv_data';

import {Body} from './body.jsx';
import {Footer} from './footer.jsx';
import {Header} from './header.jsx';

const root = document.getElementById('root');
const skills = cvData['skills'];

class Container extends React.Component {
    render() {
        return <div className="container">
            <Header nickname={cvData['basic_info']['nickname']}/>
            <Body cvData={cvData}/>
            <Footer nickname={cvData['basic_info']['nickname']} timestamp={cvData['timestamp']}/>
        </div>
    }
}

export default function render() {
    ReactDOM.render(
        <Container/>,
      document.getElementById('root')
    );
}