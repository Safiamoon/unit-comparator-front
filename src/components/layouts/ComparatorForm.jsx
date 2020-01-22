import React, {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {apiConvert, apiUnitsDisplay} from "../../Utils";
import Select from "react-select";

const options = [];

const ComparatorForm = ({handleResultData}) => {
        const {register, handleSubmit, setError, setValue} = useForm();
        const [inUnitvalue, setReactSelectInUnitvalue] = useState({selectedInOption: []});
        const [outUnitvalue, setReactSelectOutUnitvalue] = useState({selectedOutOption: []});

        const handleInUnitChange = selectedInOption  => {
            setValue("inUnit", selectedInOption);
            setReactSelectInUnitvalue({selectedInOption});
        };

        const handleOutUnitChange = selectedOutOption  => {
            setValue("outUnit", selectedOutOption);
            setReactSelectOutUnitvalue({selectedOutOption});
        };

        const unitsDisplay = async () => {
            try {
                const apiResponse = await apiUnitsDisplay();

                if (apiResponse.status >= 200 && apiResponse.status < 400) {
                    const jsonApiResponse = await apiResponse.json();
                    return jsonApiResponse;
                }
                return null;

            } catch (e) {
                setError("apiServer", "connection", "Une erreur est survenue");
            }
        };

        // Similaire à componentDidMount et componentDidUpdate :
        useEffect(() => {
            unitsDisplay()
                .then(jsonApiResponse => {
                    jsonApiResponse.result.map(unitsPeer => {
                        console.log("unitsPeer", unitsPeer);
                        return options.push({value: unitsPeer.inUnit, label: unitsPeer.inUnit})
                    });
                });
        }, []);

        React.useEffect(() => {
            register({name: 'inUnit'}); // custom register react-select
            register({name: 'outUnit'}); // custom register react-select
        }, [register]);

        const onSubmit = async (data) => {
            console.log("données :", data);
            console.log("data.inUnit.value :", data.inUnit.value);

            try {
                const apiResponse = await apiConvert(data.inUnit.value, data.outUnit.value, data.valueToConvert);
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
                            <Select
                                ref={register}
                                name="inUnit"
                                id="inUnit"
                                value={inUnitvalue.selectedInOption}
                                options={options}
                                onChange={handleInUnitChange}
                            />

                            <div className="mr-2 ml-2"><p>en</p></div>

                            <Select
                                ref={register}
                                name="outUnit"
                                id="outUnit"
                                value={outUnitvalue.selectedOutOption}
                                options={options}
                                onChange={handleOutUnitChange}
                            />

                        </div>

                        <button type="submit" className="btn btn-primary">Convertir</button>
                    </form>
                </div>


            </>

        );
    }
;
export default ComparatorForm;