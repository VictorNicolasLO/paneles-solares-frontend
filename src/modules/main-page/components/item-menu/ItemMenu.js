import React, { Component } from 'react';
import './ItemMenu.css';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class ItemMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  go = () => {
    this.props.history.push(this.props.url);
  };

  render() {
    const { name, Icon, url, onClick } = this.props;
    if (this.state.redirect) {
      return <Redirect to={url || ''} />;
    }

    const styleContainer = {
      animationDuration: this.props.duration || '.2s',
      animationDelay: this.props.delay || 0,
    };

    const styleContent = {
      animationDuration: this.props.durationContent || '.2s',
      animationDelay: this.props.delayContent || 0,
    };

    return (
      <div
        style={styleContainer}
        className="item-menu"
        onClick={onClick || this.go}>
        <div className="icon" style={styleContent}>
          {Icon ? <Icon className="item-menu-icon" /> : ''}
        </div>
        <div className="name" style={styleContent}>
          {name}
        </div>
      </div>
    );
  }
}

export default withRouter(ItemMenu);
