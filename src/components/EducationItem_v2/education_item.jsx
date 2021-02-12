import React, { Component } from 'react';

export default class EducationItem extends Component {
    render() {

	const startDate = new Date(this.props.ed['startDate'])
	const endDate = this.props.ed['endDate'] ? new Date(this.props.ed['endDate']) : null
    const endDateStr = endDate ? endDate.getFullYear() : 'present';

	const title = `${this.props.ed['institution']}, ${this.props.ed['studyType']} degree of ${this.props.ed['area']}`;
        
	return (
            <div className="row">
                <div className="col-12 date">{startDate.getFullYear()} - {endDateStr}</div>
                <div className="col-12 col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">{title}</div>
            </div>
        )

    }
}
