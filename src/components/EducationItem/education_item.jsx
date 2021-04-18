import React, { Component } from 'react';
import { getDateBetweenStr, DBY } from '../../utils';
import EducationItemCourses from '../EducationItemCourses/education_item_courses';

import './education_item.css';


export default class EducationItem extends Component {
    render() {
	const title = `${this.props.ed['institution']}, ${this.props.ed['studyType']} degree of ${this.props.ed['area']}`;
    const date = getDateBetweenStr(this.props.ed['startDate'], this.props.ed['endDate'], DBY);

	return (
            <div className="row education-item">
                <div className="col-12 date">{date}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">{title}</div>
                <EducationItemCourses ed_item={this.props.ed}/>
            </div>
        )
    }
}
