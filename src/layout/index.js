import React from 'react';
import Menu from './../component/menu';
import Footer from './../component/footer';

export default function Layout(props) {

  if (__CLIENT__) {
    document.getElementById('main').style.display = 'block';
    require('!style!css!sass!./../../public/styles/style.scss');

  }

  return (
    <main id="main" style= { { 'display':'none' } } >
      <Menu/>
      {props.children}
      <Footer/>
    </main>
  );
};
