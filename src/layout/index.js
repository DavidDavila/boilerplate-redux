import React from 'react';
import Menu from './../component/menu';

export default function Layout(props) {

  if (__CLIENT__) {
    document.getElementById('main').style.display = 'block';
    require('!style!css!sass!./../../public/styles/style.scss');

  }

  return (
    <main id="main" style= { { 'display':'none' } } >
      <Menu/>

      <section>
        {props.children}
      </section>

      <footer>Footer</footer>
    </main>
  );
};
