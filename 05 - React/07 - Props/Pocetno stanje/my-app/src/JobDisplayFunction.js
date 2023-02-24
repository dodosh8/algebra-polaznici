import React from 'react';
import PropTypes from 'prop-types';

function JobDisplayFunction({ name, age, job }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
        </div>
    );
}

JobDisplayFunction.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    job: PropTypes.string,
};

JobDisplayFunction.defaultProps = {
    job: 'unemployed',
};

export default JobDisplayFunction;
