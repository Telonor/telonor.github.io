import React, { Component } from 'react';


import Header from './Header_v2/header';
import MainHeader from './MainHeader_v2/main_header';
import MainInfo from './MainInfo_v2/main_info';
import Skills from './Skills_v2/skills';
import Languages from './Languages_v2/languages';
import Experience from './Experience_v2/experiance';
import Education from './Education_v2/education';
import Trainings from './Trainings_v2/trainings';
import CodeSamples from './CodeSamples_v2/code_samples';
import Additional from './Additional_v2/additional';
import MainFooter from './MainFooter_v2/main_footer';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header/>
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
            </div>
        )
    }
}
