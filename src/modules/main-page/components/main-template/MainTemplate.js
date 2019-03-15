import React, { Component } from 'react';
import './MainTemplate.css';
import Grid from '@material-ui/core/Grid';
import TopBar from '../../components/top-bar/TopBar';

import FootBar from '../../components/foot-bar/FootBar';

const styleDelay = (n) => ({
  animationDelay: n + 's'
});

export default class MainTemplate extends Component {
  render() {
    return (
      <div className="component-main-template">
        <header>
          <div>
            <img
              src="http://itculiacan.edu.mx/wp-content/themes/fuente-tnm/images/LogoTNM.png"
              width={300}
              alt=""
              style={styleDelay(0)}
            />
            <img
              src="http://itculiacan.edu.mx/wp-content/themes/fuente-tnm/images/LogoTecNM_Horizontal.svg"
              width={300}
              alt=""
              style={styleDelay(0.1)}
            />
            <img
              src="http://itculiacan.edu.mx/wp-content/plugins/website-logo/images/LOGO_TEC_PNG_OK.png"
              width={130}
              alt=""
              style={styleDelay(0.2)}
            />
          </div>
        </header>

        {this.props.children}
      </div>
    );
  }
}
