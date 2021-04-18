import { Component } from 'react';


export default class EducationItemCourses extends Component {
    render() {
        const key = 'courses';

        if (!key in this.props.ed_item) {
            return null;
        }

        return (
            <div className='col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2 courses'>
                {this.props.ed_item[key].join(', ')}
            </div>
        )
    }
}