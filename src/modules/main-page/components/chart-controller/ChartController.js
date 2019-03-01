import React, { Component } from 'react';
import './ChartController.css';

var nitem;

export default class ChartController extends Component {
  constructor(props) {
    super(props);
    this.state = { nitem: 0 };
  }

  handleClickLeft = e => {
    nitem = this.state.nitem;

    if (nitem != 0) {
      this.setState({
        nitem: this.state.nitem - 1
      });
    }
  };

  handleClickRight = e => {
    const { items } = this.props;
    nitem = this.state.nitem;

    if (nitem != items.length - 1) {
      this.setState({
        nitem: this.state.nitem + 1
      });
    }
  };

  render() {
    const { items } = this.props;

    return (
      <div className="component-chart-controller">
        <div className="wrap">
          <button onClick={this.handleClickLeft}>&laquo;</button>

          <div className="scroller">
            <div className="items">{items[this.state.nitem]}</div>
          </div>
          <button onClick={this.handleClickRight}>&raquo;</button>
        </div>
      </div>
    );
  }
}
