import React from 'react';
import {useForm} from 'react-hook-form';
import {connect} from "../../Utils";

const ComparatorForm = ({handleResultData}) => {
        const {register, handleSubmit, setError} = useForm();

        const onSubmit = async (data) => {
            console.log("données :", data);

            try {
                const apiResponse = await connect(data);
                if(apiResponse.status >= 200 && apiResponse.status < 400){
                    const jsonApiResponse = await apiResponse.json();

                    console.log("jsonResponse.result", jsonApiResponse.result);
                    handleResultData(jsonApiResponse.result);
                }

                //TO DO: alerte modale utilisateur

            } catch (e) {
                setError("apiServer", "connection", "Une erreur est survenue");
            }
        };

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
                                <select defaultValue="Unité d'origine" className="custom-select" ref={register}
                                        name="inUnit" id="inUnit">
                                    <option value="m2">m²</option>
                                    <option value="hectare">hectare</option>
                                    <option value="kW">kWh</option>
                                    <option value="kgCo2">kgCo2</option>
                                </select>
                            </div>

                            <div className="mr-2 ml-2"><p>en</p></div>

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

                        <button type="submit" className="btn btn-primary">Convertir</button>
                    </form>
                </div>


            </>

        );
    }
;
export default ComparatorForm;