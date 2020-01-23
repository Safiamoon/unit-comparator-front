import React from 'react';
import '../App.css';
import ConvertCard from "./layouts/ConvertCard";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Source from "./layouts/Source";

function App() {
    return (
        <div className="App">
            <Header/>
            <section id="main-container" className="main-content">
                <Router>
                    <Switch>
                        <Route path="/unit" component={Source}/>
                        <Route path="/" component={ConvertCard}/>
                    </Switch>
                </Router>
            </section>
            <Footer/>
        </div>
    );
}

export default App;
