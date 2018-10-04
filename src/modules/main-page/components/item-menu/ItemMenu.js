import React, { Component } from 'react';
import './ItemMenu.css';

export default class ItemMenu extends Component {
  render() {
    const { name, Icon } = this.props;

    return (
      <div className="item-menu">
        <div className="icon">
          <Icon className="item-menu-icon" />
        </div>
        <div className="name">{name}</div>
      </div>
    );
  }
}
