import React, { Component } from 'react';
import PDFRender from '../../pdf_render';

import './header.css';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.downloadCV = this.downloadCV.bind(this);
    }

    downloadCV() {
        if (!this.props.dataSource.isFilled) {
            return;
        }

        const renderer = new PDFRender(this.props.dataSource);
        renderer.render();
    }

    render() {
        return (
            <header className='terminal'>
                <div className='row'>
                    <div className='col text-center'>
			            <h1>{this.props.dataSource.basics['nickname']}@localhost:~</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-left'>
                        <button
                            className='btn btn-link download'
                            disabled={!this.props.dataSource.isFilled}
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
