import React, { Component } from 'react';
import styler from 'react-styling';
import { Link, IndexLink } from 'react-router';



const style = styler
`
  header
    position:relative;
    z-index:9
    padding-top: 35px

  img
    float:left

  menu
    float:right;
    item

      list-style:none;
      display:inline-block;
      padding: 0 20px 20px;

      link
        display:inline-block;
        font-size: 15px;
        line-height: 20px;

`;

export default class Menu extends Component {

  componentDidMount() {
    console.log('header');
  }

  render() {
    return (
      <header className="container" style={style.header}>
        <a style={style.img} href="http://hermanosclever.com/" target="_blank"><img src="static/images/logo.png"/></a>
        <ul style={style.menu} className="menu">
          <li style={style.menu.item}>
            <IndexLink to="/" style={style.menu.item.link} activeClassName="selected" className="menu-item">Home</IndexLink>
          </li>
          <li style={style.menu.item}>
            <Link to="/contador" style={style.menu.item.link} activeClassName="selected" className="menu-item">Contador</Link>
          </li>
        </ul>
      </header>
    );
  }
}
