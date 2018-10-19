import React, { Component } from 'react';
import './ItemMenu.css';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
class ItemMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  go = () => {
    this.props.history.push('/charts');
  };

  render() {
    const { name, Icon, url } = this.props;
    if (this.state.redirect) {
      return <Redirect to={url || ''} />;
    }
    return (
      <div className="item-menu" onClick={this.go}>
        <div className="icon">
          <Icon className="item-menu-icon" />
        </div>
        <div className="name">{name}</div>
      </div>
    );
  }
}

export default withRouter(ItemMenu);
