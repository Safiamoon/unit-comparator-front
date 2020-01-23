import React, {Component} from 'react';
import {apiConvert, apiUnitInfo} from "../../Utils";

export default class Source extends Component {

    render = () => {

        const unitInfo = async () => {
            try {
                const apiResponse = await apiUnitInfo();

                if (apiResponse.status >= 200 && apiResponse.status < 400) {
                    const jsonApiResponse = await apiResponse.json();

                    console.log("jsonResponse.result", jsonApiResponse.result);
                    return jsonApiResponse;
                }

                //TO DO: alerte modale utilisateur

            } catch (e) {
                console.log("Error : ", e);
            }
        };

        unitInfo()
            .then( jsonResponse => {

                }
            );

        return (
            <table className="table table-striped table-bordered table-light">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">Unit</th>
                    <th scope="col">Definition</th>
                    <th scope="col">Source</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>

        );
    }
};