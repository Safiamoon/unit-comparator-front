import {apiUrl} from "./constants";

export const connect = (data) => {
    const request = new Request(
        `${apiUrl}`,
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