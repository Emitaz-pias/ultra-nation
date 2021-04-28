import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h2>{props.country.name}</h2>
        </div>
    );
};

export default Country;