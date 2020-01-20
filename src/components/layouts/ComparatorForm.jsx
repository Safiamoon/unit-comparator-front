import React from 'react';
import {useForm} from 'react-hook-form';
import Axios from "axios";
import {apiUrl} from "../../constants";
import {connect} from "../../Utils";

const ComparatorForm = ({handleResultData}) => {
    const {register, handleSubmit, setError} = useForm();

    const onSubmit = data => {
        console.log("données :", data);

        // Axios.post(apiUrl, data)
        //     .then(function (response) {
        //         console.log("response", response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
        //

        connect(data)
            .then(response => {
                if (response.status < 200 || response.status >= 300)
                   console.log("mlkdfmlsdkmksd");

                handleResultData = result => {
                    result = response.json();
                    return result;
                };
            })
            .catch(e => {
                setError("apiServer", "connection", "Une erreur est survenue");
            });

    };

    return (
        <>
            <h1 className="mb-3">Convertisseur</h1>

            <div id="form-content">
                <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>

                    <button className="btn btn-primary">Convertir</button>

                    <div className="form-group">
                        <input type="number" ref={register} name="squaremeter" id="squaremeter"
                               className="form-control "
                               placeholder="..."/>
                    </div>
                    <div className="form-group">
                        <p>m² en hectare</p>
                    </div>
                </form>

            </div>


        </>

    );
};
export default ComparatorForm;