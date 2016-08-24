import React, { Component } from 'react';

import styler from 'react-styling';


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

	image
		display: block;
		margin-left  : auto;
		margin-right : auto;


`;

export default class Page extends Component {
	render() {
  return (
			<section className="table" style={style.container}>
				<div className="table-cell">
					<h1 style={style.header}>
						BoilerPlate Redux :)
					</h1>
					<img src="/statics/images/logo.png" style={style.image}/>
				</div>
			</section>
		);
	}
}
