import React, {
  Component
} from 'react';
import './Playground.css';
import MainTemplate from '../components/main-template/MainTemplate'
export default class Playground extends Component {
  clickTest = () => {
    alert('Hey');
  };

  render() {
    return <MainTemplate / > ;
  }
}