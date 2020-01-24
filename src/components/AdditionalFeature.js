import React from 'react';
import { connect } from 'react-redux';
import {buyItem} from '../actions/actions.js';

const AdditionalFeature = props => {
  // console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button key={props.id} onClick={()=> props.buyItem(props.feature) }className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};



//
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
  { buyItem })(AdditionalFeature); // function currying
