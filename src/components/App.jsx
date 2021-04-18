import React, { Component } from 'react';

import DataSource from '../data_source';

import Header from './Header/header';
import MainHeader from './MainHeader/main_header';
import MainInfo from './MainInfo/main_info';
import Skills from './Skills/skills';
import Languages from './Languages/languages';
import Experience from './Experience/experiance';
import Education from './Education/education';
import Trainings from './Trainings/trainings';
import CodeSamples from './CodeSamples/code_samples';
import Additional from './Additional/additional';
import MainFooter from './MainFooter/main_footer';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new DataSource()
        }
    }

    getResumeData() {
        const jsonUrl = 'https://api.github.com/gists/8e4bbe661c3e8ececbfe2ae86c39e9dd';

        fetch(jsonUrl).then(
            response => {
                return response.json();
            }
        ).then(
            data => {
                const cvData = JSON.parse(data['files']['resume.json']['content']);
                this.setState(
                    {dataSource: new DataSource(cvData)}
                )
            }
        )
    }

    componentDidMount() {
        this.getResumeData()
    }

    render() {
        return (
            <div className="container">
                <Header dataSource={this.state.dataSource}/>
                <main className="terminal terminal-body">
                    <MainHeader dataSource={this.state.dataSource}/>
                    <MainInfo dataSource={this.state.dataSource}/>
                    <Skills dataSource={this.state.dataSource}/>
                    <Languages dataSource={this.state.dataSource}/>
                    <Experience dataSource={this.state.dataSource}/>
                    <Education dataSource={this.state.dataSource}/>
                    <Trainings dataSource={this.state.dataSource}/>
                    <CodeSamples dataSource={this.state.dataSource}/>
                    <Additional dataSource={this.state.dataSource}/>
                    <MainFooter dataSource={this.state.dataSource}/>
                </main>
            </div>
        )
    }
}
