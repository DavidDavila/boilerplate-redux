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

	marginBottom
		margin-bottom: 50px;

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
					<div className="container">
						<h1 style={style.header}>
							BoilerPlate
						</h1>
						<h2 style={style.marginBottom}>
							Redux, React Universal, Webpack, Sass, Styles inline, Live Reload
						</h2>
						<img src="static/images/logo.png" style={style.image}/>
					</div>
				</div>
			</section>
		);
	}
}
