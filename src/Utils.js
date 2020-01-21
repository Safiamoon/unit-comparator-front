import {apiConvertUrl, apiUnitsUrl} from "./constants";
import Axios from "axios";

export const apiConvert = (data) => {
    const request = new Request(
        `${apiConvertUrl}`,
        {
            method: 'POST',
            body: JSON.stringify(data),
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

