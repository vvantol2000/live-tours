import React, { Component } from 'react';
// import './App.scss';

import Navbar from './components/Navbar/Navbar';
import SectionPara from './components/SectionParallax/SectionPara';
import Tours from './components/ToursComponent/Tours'

class App extends Component{
    render() {
        return (
            <div className="App">
                <Navbar/>
                <SectionPara/>
                <div className="main main-raised">
                    <div className="container">
                        <div className="section text-center">
                            Select a tour and let us guide you around your destination!
                        </div>
                        <Tours/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
