import React from "react";

class Position extends React.Component {
    render() {
        return (
            <div>
                <h4>Position</h4>
                <ul>
                    <li>{this.props.basic_info['fio']}</li>
                    <li>{this.props.basic_info['position']}</li>
                </ul>
            </div>
        )
    }
}

class BasicInfo extends React.Component {
    getBasicData(key) {
        return this.props.basic_info[key];
    }

    getAge() {
        return new Date().getFullYear() - new Date(
            this.getBasicData('bday')
        ).getFullYear();
    }

    render() {
        return (
            <div>
                <h4>Basic</h4>
                <ul>
                    <li><span>Age:</span> {this.getAge()}</li>
                    <li><span>City:</span> {this.getBasicData('city')}</li>
                    <li>
                        <span>Family status:</span> {this.getBasicData('family_status')}
                    </li>
                    <li><span>E-mail:</span> {this.getBasicData('email')}</li>
                    <li><span>Skype:</span> {this.getBasicData('skype')}</li>
                </ul>
            </div>
        )
    }
}

class Education extends React.Component {
    render() {
        return (
            <div>
                <h4>Education</h4>
                <ul>
                    {this.props.education.map(
                        ed => (<li key={ed.date}>{ed.name} | {ed.date}</li>)
                    )}
                </ul>
            </div>
        )
    }
}

class Experience extends React.Component {
    render() {
        return (
            <div>
                <h4>Experience</h4>
                <ul>
                    {this.props.experience.map(
                        exp => (<li key={exp.date}>{exp.name} | {exp.date} | {exp.position} | {exp.responsibility}</li>)
                    )}
                </ul>
            </div>
        )
    }
}

class Skills extends React.Component {
    render() {
        return (
            <div>
                <h4>Skills</h4>
                {
                    Object.keys(this.props.skills).map(
                        skillGroup => (
                            <span className="skill-type">
                                {skillGroup}: {
                                this.props.skills[skillGroup].map(
                                    skill => (skill + ', ')
                                )
                            }
                            </span>
                    )
                )}
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <div className="terminal-body">
                <Position basic_info={this.props.cvData['basic_info']}/>
                <BasicInfo basic_info={this.props.cvData['basic_info']}/>
                <Education education={this.props.cvData['education']}/>
                <Experience experience={this.props.cvData['experience']}/>
                <Skills skills={this.props.cvData['skills']}/>
            </div>
        )
    }
}

export {Body};