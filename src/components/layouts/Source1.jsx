import React, {Component} from 'react';
import {apiUnitInfo} from "../../Utils";
import UnitRow from "./UnitRowContent";

let rowInfos = null;

export default class Source extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: null
        };
    }

    componentDidMount() {
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

        unitInfo().then(jsonResponse => {
            return rowInfos = jsonResponse;
        });
    }

    render = () => {
        if (rowInfos) {
            return (
                <table className="table table-striped table-bordered table-light">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Unit</th>
                        <th scope="col">Definition</th>
                        <th scope="col">Source</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        rowInfos.result.map(unitInfos => {
                            return (
                                <>
                                    <UnitRow info={unitInfos}/>
                                </>);
                        })
                    }
                    </tbody>
                </table>

            );
        }

        return (
            <table className="table table-striped table-bordered table-light">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Unit</th>
                    <th scope="col">Definition</th>
                    <th scope="col">Source</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="col"></td>
                    <td scope="col"></td>
                    <td scope="col"></td>
                </tr>
                </tbody>
            </table>
        );
    }
};