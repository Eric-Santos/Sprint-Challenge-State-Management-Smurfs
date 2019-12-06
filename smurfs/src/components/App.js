import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { FetchSmurf, AddSmurf } from '../actions/index';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';

const App = props => {
  useEffect(() => {
    props.FetchSmurf();
  }, []);

  return (
    <div className="App">
      <SmurfForm />
      {props.smurfs.map(smurf => (
        <SmurfList
          smurf={smurf}
          key={smurf.id}
          DeleteSmurf={props.DeleteSmurf}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { FetchSmurf, AddSmurf })(App);
