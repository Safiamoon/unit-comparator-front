import React, {Component} from 'react';

export default class ComparatorResult extends Component {

    render = () => {
        return (
            <div id="form-result">
                <p>{this.props.result.convertedValue}</p>
            </div>
        );
    }
};