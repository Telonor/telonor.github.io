import React from 'react';
import cvDataExt from '../../resume_extender';

import './main_footer.css';

export default class MainFooter extends React.Component {
    render() {
        return (
            <figure className='main-footer'>
                <div className='row'>
                    <div className='col terminal-caret'>[{cvDataExt['basics']['nickname']}@localhost ~]$</div>
                </div>
            </figure>
        )
    }
}
