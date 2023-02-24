import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDisplayClass extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    job: PropTypes.string,
  };

  static defaultProps = {
    job: 'unemployed',
  };

  render() {
    const { name, age, job } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Job: {job}</p>
      </div>
    );
  }
}

export default UserDisplayClass;
