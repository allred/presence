import React from 'react'
import { render } from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return <p>Hi</p>;
  }
}

render(
  <div>Howdy</div>,
  document.getElementById('root')
);
