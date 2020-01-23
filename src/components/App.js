import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import MainContainer from "./layouts/MainContainer";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MainContainer/>
            <Footer/>
        </div>
    );
}

export default App;
