import React, {Component} from 'react';

export default class ComparatorForm extends Component {

    render = () => {
        return (
            <>

                <h1 className="mb-3">Convertisseur</h1>

                <div id="form-content">

                    <form className="form-inline">
                        {/*<p>Convertir</p>*/}
                        <button type="submit" className="btn btn-primary">Convertir</button>

                        <div className="form-group">
                            <input type="number" className="form-control " placeholder="..."/>
                        </div>
                        <div className="form-group">
                            <p>m² en hectare</p>
                        </div>
                    </form>

                </div>


            </>

        );
    }
};