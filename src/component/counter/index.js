import React, { Component, PropTypes } from 'react';
import styler from 'react-styling';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as counterAction from './action/counter-action';

const style = styler`
  b
    font-size: 29px
  menu
    list-style-type: none
 
    item
      display: inline-block
 
      link
        display         : inline-block
        text-decoration : none
        color           : #000000
        padding         : 0.4em
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
        <p style={style.b}> El resultado de tu contador es: 
          <b >{this.props.counter}</b>
        </p>

        <p>
          <button style={style.menu.item} type="button" onClick={this.props.decrement}>Restar</button>
          <button style={style.menu.item} type="button" onClick={this.props.increment}>Sumar</button>
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

