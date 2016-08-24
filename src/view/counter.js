import React, { Component } from 'react';

import Counter from 'component/counter';

// NOTE: http://rackt.github.io/redux/docs/recipes/WritingTests.html
export class CounterView extends Component {
  render() {
    return (
      <div>
        <h1>Contador</h1>

        <Counter />
      </div>
    );
  }
}

export default CounterView;
