import React from 'react';
import {removeFeature} from '../actions/actions.js';
import { connect } from 'react-redux';


const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button key={props.id} onClick={()=> props.removeFeature(props.feature) } className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// export default AddedFeature;

const mapStateToProps = state => {
  console.log(state)
  return {
    key: state.additionalFeatures.id,
    name:state.additionalFeatures.name,
    price:state.additionalFeatures.price
  };
};

export default connect(
  mapStateToProps,
  { removeFeature })(AddedFeature); // function currying
