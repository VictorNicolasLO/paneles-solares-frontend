import React, { Component } from 'react';
import './MainTemplate.css';

export default class MainTemplate extends Component {
  render() {
    return (
      <div className="component-main-template">
        <div className="logo">
          <div>
            <img
              width="100"
              src="./tec-logo.png"
              alt="Logo del tecnologico de culiacan"
            />
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
