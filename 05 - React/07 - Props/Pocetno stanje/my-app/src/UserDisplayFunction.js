import React from 'react';
import PropTypes from 'prop-types';

function UserDisplayFunction({ name, age, job, children }) {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Job: {job}</p>
            {children}
        </div>
    );
}

UserDisplayFunction.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    job: PropTypes.string,
    children: PropTypes.element,
};

UserDisplayFunction.defaultProps = {
    job: 'unemployed',
    children: null,
};

export default UserDisplayFunction;
