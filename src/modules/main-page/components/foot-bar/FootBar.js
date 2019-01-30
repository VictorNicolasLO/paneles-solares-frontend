import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FootBar.css';

class FootBar extends Component {
  render() {
    return (
      <div className="component-foot-bar">
        <div className="foot-bar-container">
          <hr className="hr" />
          <div className="button" onClick={this.props.onShowInfo}>
            <h1 className="h1">i</h1>
          </div>
        </div>
      </div>
    );
  }
}

FootBar.propTypes = {
  onShowInfo: PropTypes.func.isRequired
};

export default FootBar;
