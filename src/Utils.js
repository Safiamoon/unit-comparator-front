import {apiConvertUrl, apiUnitsUrl} from "./constants";
import Axios from "axios";

export const apiConvert = (inUnit, outUnit, valueToConvert) => {
    const request = new Request(
        `${apiConvertUrl}`,
        {
            method: 'POST',
            body: JSON.stringify({
                "inUnit": inUnit,
                "outUnit": outUnit,
                "valueToConvert": valueToConvert
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }
    );

    return fetch(request);
}

export const apiUnitsDisplay = () => {
    const request = new Request(
        `${apiUnitsUrl}`,
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }
    );

    return fetch(request);
}

