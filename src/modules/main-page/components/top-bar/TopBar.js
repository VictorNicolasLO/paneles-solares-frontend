import React, { Component } from 'react';
import './TopBar.css';
export default class TopBar extends Component {
  render() {
    const { path } = this.props;

    let title = 'Instituto Tecnológico de Culiacán';

    if (path) {
      title = `${title} - ${path}`;
    }

    return (
      <div className="component-TopBar">
        <div className="title">{title}</div>
        <div className="line" />
      </div>
    );
  }
}
