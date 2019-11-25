import React from 'react';
import { connect } from 'react-redux';
import { getSmurfData } from '../actions/index';

const Smurfs = props => {
  //console.log(props);
  return (
    <>
      <button
        onClick={() => {
          props.getSmurfData();
        }}
      >
        Get Smurfs
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        <>
          <div>{props.name}</div>
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    name: state.name
  };
};

export default connect(mapStateToProps, { getSmurfData })(Smurfs);
