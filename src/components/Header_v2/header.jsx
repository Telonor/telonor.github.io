import React, { Component } from 'react';

import './header.css';
import PDFRenderer from '../../pdf_render';
import cvDataExt from '../../resume_extender';

class Header extends Component {
    downloadCV() {
        const renderer = new PDFRenderer();
        renderer.render();
    }

    render() {
        return (
            <header className='terminal'>
                <div className='row'>
                    <div className='col text-center'>
			<h1>{cvDataExt['basics']['nickname']}@localhost:~</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col text-left'>
                        <button
                            className='btn disabled btn-link download'
                            /*onClick={this.downloadCV}*/
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
