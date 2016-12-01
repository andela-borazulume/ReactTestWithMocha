import React, { Component, PropTypes } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class Email extends Component {
  render() {
    return (
     <div>
      <input />
      <button></button>
     </div>
    );
  }
}

Email.proptypes = {
  handleImageChange: PropTypes.func,
  fetchGravatar: PropTypes.func
}

export default Email;
