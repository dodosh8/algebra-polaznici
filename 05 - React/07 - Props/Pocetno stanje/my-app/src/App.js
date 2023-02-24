import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserDisplayClass from './UserDisplayClass';
import UserDisplayFunction from './UserDisplayFunction';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    job: 'unemployed',
  };

  field = {
    users: [
      { name: 'Domagoj', age: 25 },
      { name: 'Jana', age: 30 },
      { name: 'Ivan', age: 35 },
    ],
  };

  render() {
    const { users } = this.field;
    const { children, job } = this.props;
    return (
      <div>
        {users.map((user) => (
          <div key={user.name}>
            <UserDisplayClass name={user.name} age={user.age} job={job} />
            <UserDisplayFunction name={user.name} age={user.age}>
              {children}
            </UserDisplayFunction>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
