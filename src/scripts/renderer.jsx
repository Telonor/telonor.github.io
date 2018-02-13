import React from 'react';
import ReactDOM from 'react-dom';

import cvData from './cv_data';

const root = document.getElementById('root');
const skills = cvData['skills'];

export default function render() {
    ReactDOM.render(
        <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>,
      document.getElementById('root')
    );
}