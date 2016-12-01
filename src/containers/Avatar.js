import React, { Component, PropTypes } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import {Button} from "react-bootstrap"

class Avatar extends Component {
  render() {
    return (
     <div>
      <p>
        <em>{this.props.email}</em>
      </p>
      <img src={this.props.src} className="img-rounded"/>
     </div>
    );
  }
}

Avatar.proptypes = {
  src: PropTypes.string,
  email: PropTypes.string
}

export default Avatar;
