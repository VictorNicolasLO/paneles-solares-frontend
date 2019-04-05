import React, { Component } from 'react';
import './ChartController.css';
import { Paper } from '@material-ui/core';
import MovmentButton from './movment-button';

var nitem;

const left = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto',
  left: '3%',
};
const right = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  margin: 'auto',
  right: '3%',
};
export default class ChartController extends Component {
  constructor(props) {
    super(props);

    this.state = { nitem: 0 };
  }

  handleClickLeft = (e) => {
    const { onChange } = this.props
    nitem = this.state.nitem;
    if (nitem !== 0) {
      if (onChange)
        onChange(this.state.nitem - 1)
      this.setState({
        nitem: this.state.nitem - 1,
      });
    }
  };

  handleClickRight = (e) => {
    console.log(e);
    const { items, onChange } = this.props;
    nitem = this.state.nitem;

    if (nitem !== items.length - 1) {
      if (onChange)
        onChange(this.state.nitem - 1)
      this.setState({
        nitem: this.state.nitem + 1,
      });
    }
  };



  render() {
    const { items } = this.props;

    return (
      <div className="component-chart-controller">
        <Paper style={{ width: '70%', margin: 'auto', minHeight: '500px' }}>
          <div>{items[this.state.nitem]}</div>
        </Paper>
        {this.state.nitem !== 0 ? (
          <MovmentButton style={left} left onClick={this.handleClickLeft} />
        ) : null}
        {this.state.nitem !== items.length - 1 ? (
          <MovmentButton style={right} right onClick={this.handleClickRight} />
        ) : null}
      </div>
    );
  }
}
