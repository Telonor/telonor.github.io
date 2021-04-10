import { Component } from 'react';


export default class ExperienceItemHighlights extends Component {
    render() {
        const key = 'highlights';

        if (!key in this.props.exp) {
            return null;
        }

        return (
            <div className='col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2 highlights'>
                {this.props.exp[key].join(', ')}
            </div>
        )
    }
}