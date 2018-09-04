import React, { Component } from "react";

import Header from "./Header/header";
import MainHeader from "./MainHeader/main_header";
import MainInfo from "./MainInfo/main_info";
import MainFooter from "./MainFooter/main_footer";
import Skills from "./Skills/skills";
import Languages from "./Languages/languages";
import Experience from "./Experience/experiance";
import Additional from "./Additional/additional";
import Education from "./Education/education";
import Trainings from "./Trainings/trainings";
import CodeSamples from "./CodeSamples/code_samples";

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