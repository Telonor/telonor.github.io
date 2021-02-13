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
    render() {
        const dataSource = new DataSource();
        return (
            <div className="container">
                <Header dataSource={dataSource}/>
                <main className="terminal terminal-body">
                    <MainHeader dataSource={dataSource}/>
                    <MainInfo dataSource={dataSource}/>
                    <Skills dataSource={dataSource}/>
                    <Languages dataSource={dataSource}/>
                    <Experience dataSource={dataSource}/>
                    <Education dataSource={dataSource}/>
                    <Trainings dataSource={dataSource}/>
                    <CodeSamples dataSource={dataSource}/>
                    <Additional dataSource={dataSource}/>
                    <MainFooter dataSource={dataSource}/>
                </main>
            </div>
        )
    }
}
