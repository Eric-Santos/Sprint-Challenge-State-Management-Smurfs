import React, { useState } from 'react';
import { AddSmurf, FetchSmurf } from '../actions/index';
import { connect } from 'react-redux';

import { Form } from 'semantic-ui-react';

const SmurfForm = props => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const handleName = e => {
    setName(e.target.value);
  };
  const handleHeight = e => {
    setHeight(e.target.value);
  };
  const handleAge = e => {
    setAge(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.AddSmurf(name, height, age);
    setName('');
    setAge('');
    setHeight('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input
          type="text"
          fluid
          id="form-subcomponent-shorthand-input-first-name"
          label="name"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
        <Form.Input
          type="number"
          fluid
          id="form-subcomponent-shorthand-input-last-name"
          label="age"
          placeholder="Age"
          value={age}
          onChange={handleAge}
        />
        <Form.Input
          type="number"
          fluid
          id="form-subcomponent-shorthand-input-last-name"
          label="height"
          placeholder="Height"
          value={height}
          onChange={handleHeight}
        />
      </Form.Group>
      <button>Submit</button>
    </Form>
  );
};

export default connect(null, { AddSmurf, FetchSmurf })(SmurfForm);
