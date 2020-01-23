import React from 'react';


const UnitRow = ({info}) => {
    return (
        <tr>
            <th scope="row">{info.unit}</th>
            <td>{info.definition}</td>
            <td>{info.source}</td>
        </tr>
    )
}

export default UnitRow;