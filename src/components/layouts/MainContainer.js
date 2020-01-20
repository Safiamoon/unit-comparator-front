import React, {useState} from "react";
import ComparatorForm from "./ComparatorForm";
import ComparatorResult from "./ComparatorResult";

let MainContainer = () => {
    const [resultData, setResultData] = useState(0);
    return (
        <section id="main-container" className="main-content">
            <div className="card">
                <ComparatorForm handleResultData={data => setResultData(data)}/>
                <ComparatorResult result={resultData}/>
            </div>
        </section>
    );
}

export default MainContainer;