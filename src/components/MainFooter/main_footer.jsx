import React from 'react';

import './main_footer.css';


export default class MainFooter extends React.Component {
    render() {
        const basicInfo = this.props.dataSource.basics
        return (
            <figure className='main-footer'>
                <div className='row'>
                    <div className='col terminal-caret'>{basicInfo['nickname']}@localhost ~]$</div>
                </div>
            </figure>
        )
    }
}
