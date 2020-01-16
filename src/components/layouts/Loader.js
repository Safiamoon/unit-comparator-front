import React from 'react';

const Loader = ({display}) => {

    if (display) {
        return (
            <div id="loader" className="spinner-grow text-light" role="status">
                {/*<span className="sr-only"></span>*/}
            </div>
        );
    }

    return null;
};

export default Loader;