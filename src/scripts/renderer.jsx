import React from 'react';
import ReactDom from 'react-dom';

const root = document.getElementById('root');

export default function render() {
    ReactDom.render(
        React.createElement(
            'div',
            {'className': 'alert alert-primary'},
            'Hello react.'
        ),
        root
    )
}