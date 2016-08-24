import React, { Component } from 'react';
import styler from 'react-styling';

import Counter from 'component/counter';


const style = styler
`
	container
		position:absolute;
		top:0;
		left:0;
		height:100vh;

	header
		text-align: center;
		font-weight:bold;

	marginBottom
		margin-bottom: 50px;

	image
		display: block;
		margin-left  : auto;
		margin-right : auto;


`;


export class CounterView extends Component {

  render() {
    return (
		<section className="table" style={style.container}>
			<div className="table-cell">
				<div className="container">
					<h1>Contador</h1>
					<Counter />
				</div>
			</div>
		</section>

    );
  }
}

export default CounterView;
