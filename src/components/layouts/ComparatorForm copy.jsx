import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { apiConvert, apiUnitsDisplay } from "../../Utils";
import Select from "react-select";
import Axios from 'axios';
import { apiUnitsUrl } from '../../constants';

const options = [];

const ComparatorForm = ({ handleResultData }) => {
    const { register, handleSubmit, setError, setValue } = useForm();
    const [values, setReactSelectValue] = useState({ selectedOption: [] });

    const handleMultiChange = selectedOption => {
        setValue("reactSelect", selectedOption);
        setReactSelectValue({ selectedOption });
    }

    /* const unitsDisplay = async () => {
        try {
            const apiResponse = await apiUnitsDisplay;

            if (apiResponse.status >= 200 && apiResponse.status < 400) {

                const jsonApiResponse = await apiResponse.json();

                console.log("jsonResponse.result", jsonApiResponse.result);

                jsonApiResponse.result.map(unitsPeer => {
                    console.log("unitsPeer", unitsPeer);
                    options.push({ value: unitsPeer.inUnit, label: unitsPeer.inUnit })
                });
            }

        } catch (e) {
            setError("apiServer", "connection", "Une erreur est survenue");
        }
    } */

    // Similaire à componentDidMount et componentDidUpdate :
    useEffect(() => {
        Axios.get(apiUnitsUrl)
            .then(({ apiResponse }) => {
                console.log("apiResponse", apiResponse);
                return apiResponse.json();
            })
            .then(({ result }) => {
                console.log("jsonResponse.result", result);

                result.map(unitsPeer => {
                    console.log("unitsPeer", unitsPeer);
                    options.push({ value: unitsPeer.inUnit, label: unitsPeer.inUnit })
                });
            });;
    }, []);

    const onSubmit = async (data) => {
        console.log("données :", data);

        try {
            const apiResponse = await apiConvert(data);
            if (apiResponse.status >= 200 && apiResponse.status < 400) {

                const jsonApiResponse = await apiResponse.json();

                console.log("jsonResponse.result", jsonApiResponse.result);
                handleResultData(jsonApiResponse.result);
            }

            //TO DO: alerte modale utilisateur

        } catch (e) {
            setError("apiServer", "connection", "Une erreur est survenue");
        }
    };

    React.useEffect(() => {
        register({ name: "reactSelect" }); // custom register react-select 
    }, [register])

    return (
        <>
            <h1 className="mb-3">Convertisseur</h1>

            <div id="form-content">
                <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>

                    <input
                        type="number"
                        ref={register}
                        name="valueToConvert"
                        id="valueToConvert"
                        className="form-control "
                        placeholder="..."
                        step='0.001'
                        min='0'
                    />

                    <div className="form-group">
                        <div className="form-group">
                            <Select
                                // defaultValue="Unité d'origine"
                                className="custom-select"
                                // ref={register}
                                name="inUnit"
                                id="inUnit"
                                value={values.selectedOption}
                                options={options}
                                onChange={handleMultiChange}
                                isMulti
                            />
                            {/* <option value="m2">m²</option>
                                    <option value="hectare">hectare</option>
                                    <option value="kW">kWh</option>
                                    <option value="kgCo2">kgCo2</option> */}
                        </div>

                        <div className="mr-2 ml-2"><p>en</p></div>

                        {/* <div className="form-group">
                            <Select 
                            defaultValue="Unité de sortie" 
                            className="custom-select" 
                            ref={register}
                            name="outUnit" 
                            id="outUnit"/>
                                <option value="hectare">hectare</option>
                                    <option value="m2">m²</option>
                                    <option value="kW">kWh</option>
                                    <option value="kgCo2">kgCo2</option>
                        </div> */}
                    </div>

                    <button type="submit" className="btn btn-primary">Convertir</button>
                </form>
            </div>


        </>

    );
}
    ;
export default ComparatorForm;