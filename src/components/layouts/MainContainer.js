import React from 'react';

import ComparatorForm from "./ComparatorForm";
import ComparatorResult from "./ComparatorResult";

let MainContainer = () => {
    return (
        <section id="main-container" className="main-content">
            <div className="card">
           <ComparatorForm />
           <ComparatorResult />
            </div>
        </section>
    );
}

export default MainContainer;