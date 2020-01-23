import {apiConvertUrl, apiFilterUnitUrl, apiUnitsUrl} from "./constants";

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
        `${apiFilterUnitUrl}`,
        {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }
    );

    return fetch(request);
}

/**
 * headers:new Headers is a parameter in my http request; "application/json" means a json content
 * @returns {Promise<Response>}
 */
export const apiUnitInfo = () => {
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