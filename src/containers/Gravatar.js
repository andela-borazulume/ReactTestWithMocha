import React, { Component, PropTypes } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import Avatar from "./Avatar";
import Email from "./Email";

class Gravatar extends Component {
  render() {
    return (
     <div>
        <Email/>
        <Avatar />
     </div>
    );
  }
}

Gravatar.proptypes = {
  src: PropTypes.string,
  email: PropTypes.string
}

export default Gravatar;
