import React from 'react';

const SmurfList = ({ smurf, DeleteSmurf }) => {
  return (
    <div>
      <h1>{smurf.name}</h1>
      <h1>{smurf.age}</h1>
      <h1>{smurf.height}</h1>
      <button onClick={() => DeleteSmurf(smurf.id)}>DeleteSmurf</button>
    </div>
  );
};

export default SmurfList;
