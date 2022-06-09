import React from 'react';
import ReactDOM from 'react-dom';

class Link extends React.Component {
  render() {
    return React.createElement(
      'p',
      null,
      React.createElement(
        'a',
        {href: this.props.url},
        this.props.children,
      ),
    );
  }
}

const link1 = React.createElement(
  Link
  
);
const link2 = React.createElement(Link);
const link3 = React.createElement(Link);
const group = React.createElement(React.Fragment, null, link1, link2, link3);
const domElement = document.getElementById('root');
ReactDOM.render(group, domElement);
