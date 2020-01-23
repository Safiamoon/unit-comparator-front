import React, {useState} from "react";
import ComparatorForm from "../ComparatorForm";
import ComparatorResult from "./ComparatorResult";

let ConvertCard = () => {
    const [resultData, setResultData] = useState(0);
    return (
        <div className="card">
            <ComparatorForm handleResultData={data => setResultData(data)}/>
            <ComparatorResult result={resultData}/>
        </div>
    );
}

export default ConvertCard;