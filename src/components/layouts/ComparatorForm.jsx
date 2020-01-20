import React from 'react';
import {useForm} from 'react-hook-form';
import Axios from "axios";
import {apiUrl} from "../../constants"
import {connect} from "../../Utils";

const ComparatorForm = ({handleResultData}) => {
        const {register, handleSubmit, setError} = useForm();

        const onSubmit = async (data) => {
            console.log("données :", data);

            // Axios.post(apiUrl, data)
            //     .then(function (response) {
            //         console.log("response", response);
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
            //
            try {
                const response = await connect(data);
                const jsonResponse = await response.json();

                console.log("jsonResponse.result", jsonResponse.result);
                handleResultData(jsonResponse.result);
            } catch (e) {
                setError("apiServer", "connection", "Une erreur est survenue");
            }
        };

        return (
            <>
                <h1 className="mb-3">Convertisseur</h1>

                <div id="form-content">
                    <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>

                        <button type="submit" className="btn btn-primary">Convertir</button>

                        <input
                            type="number"
                            ref={register}
                            name="valueToConvert"
                            id="valueToConvert"
                            className="form-control "
                            placeholder="..."
                        />

                        <div className="form-group">
                            <div className="form-group">
                                <select defaultValue="Unité d'origine" className="custom-select" ref={register}
                                        name="inUnit" id="inUnit">
                                    <option value="m2">m²</option>
                                    <option value="hectare">hectare</option>
                                    <option value="kW">kWh</option>
                                    <option value="kgCo2">kgCo2</option>
                                </select>
                            </div>

                            <div className="mr-2 ml-2"><p>En</p></div>

                            <div className="form-group">
                                <select defaultValue="Unité de sortie" className="custom-select" ref={register}
                                        name="outUnit" id="outUnit">
                                    <option value="hectare">hectare</option>
                                    <option value="m2">m²</option>
                                    <option value="kW">kWh</option>
                                    <option value="kgCo2">kgCo2</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>


            </>

        );
    }
;
export default ComparatorForm;