'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

var _StyledComponents = require('../animations/StyledComponents');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SectionInfo(props) {
  return _react2.default.createElement(
    _core.Grid,
    { item: true, xs: 8 },
    _react2.default.createElement(
      _StyledComponents.ShowAnimation,
      { delay: 0 },
      _react2.default.createElement(
        _core.Typography,
        { variant: 'h5', gutterBottom: true },
        props.title
      )
    ),
    _react2.default.createElement(
      _StyledComponents.ShowAnimation,
      { delay: 0.1 },
      _react2.default.createElement(
        _core.Typography,
        { variant: 'body1', gutterBottom: true },
        props.description
      )
    )
  );
}

exports.default = SectionInfo;

//# sourceMappingURL=index.js.map