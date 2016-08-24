import React, { Component, PropTypes } from 'react';
import styler from 'react-styling';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterAction from './action/counter-action';

const style = styler`
  b
    font-size: 40px;
    font-family: WorkSans
    margin:60px;
    display:block;
    color: #222;
  p
    overflow: hidden;
    display: block;
    text-align: center;
`;
// NOTE: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class Counter extends Component {

  componentDidMount() {
    console.log(8);
    console.log(89);
  }
  render() {
    return (
      <div>
        <h2> El valor de tu contador es: 
          <b style={style.b}>{this.props.counter}</b>
        </h2>

        <p style={style.p}>
          <button  type="button" onClick={this.props.decrement}>Restar</button>
          <button  type="button" onClick={this.props.increment}>Sumar</button>
        </p>
      </div>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired
};

export default connect(state => ({
  counter: state.counterReducer
}), function (dispatch) {
  return bindActionCreators(counterAction, dispatch);
})(Counter);

