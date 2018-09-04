import React from 'react';
import cvData from './cv_data';

import Skills from './skills.jsx';
import Languages from './languages.jsx';
import Education from './educations.jsx';
import Experience from './experience.jsx';
import Trainings from './trainings.jsx';
import CodeSamples from './code_samples.jsx';

class MainHeader extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col text-center">
                        {cvData['basic_info']['fio']}
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        {cvData['basic_info']['position']}
                    </div>
                </div>
            </figure>
        )
    }
}

class MainInfo extends React.Component {
    getAge(bdate) {
        return new Date().getFullYear() - new Date(
            bdate
        ).getFullYear();
    }

    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">Age</span>
                        {this.getAge(cvData['basic_info']['bday'])}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">City</span>
                        {cvData['basic_info']['city']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">Family status</span>
                        {cvData['basic_info']['family_status']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">E-mail</span>
                        {cvData['basic_info']['email']}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <span className="nfo-group">Skype</span>
                        {cvData['basic_info']['skype']}
                    </div>
                </div>
            </figure>
        )
    }
}

class Additional extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col nfo-group">Additional</div>
                </div>
                <div className="row">
                    <div className="col col-sm-9 offset-sm-3 col-xl-10 offset-xl-2">
                        {cvData['additional']}
                    </div>
                </div>
            </figure>
        )
    }
}

class MainFooter extends React.Component {
    render() {
        return (
            <figure>
                <div className="row">
                    <div className="col terminal-caret">[Telonor@localhost ~]$</div>
                </div>
            </figure>
        )
    }
}

class Main extends React.Component {
    render() {
        return (
            <main className="terminal terminal-body">
                <MainHeader/>
                <MainInfo/>
                <Skills/>
                <Languages/>
                <Experience/>
                <Education/>
                <Trainings/>
                <CodeSamples/>
                <Additional/>
                <MainFooter/>
            </main>
        )
    }
}

export default Main;