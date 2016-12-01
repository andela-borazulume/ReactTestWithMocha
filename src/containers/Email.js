import React, { Component, PropTypes } from 'react';
import logo from '../logo.svg';
import '../css/App.css';

class Email extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="form-group">
        <input onChange={this.props.handleEmailChange} className="form-control" style={{
          width: 200
        }} type="text" />
        <button onClick={this.props.fetchGravatar} className="btn-success btn ">Fetch</button>
      </div>
    );
  }
}

  Email.propTypes = {
    handleEmailChange: PropTypes.func,
    fetchGravatar: PropTypes.func,
  };

export default Email;
