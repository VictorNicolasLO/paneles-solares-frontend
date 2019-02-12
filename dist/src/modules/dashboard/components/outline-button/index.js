'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OutlineButton = function OutlineButton(props) {
  return _react2.default.createElement(
    _core.Button,
    {
      onClick: props.onClick,
      style: {
        color: 'white',
        borderColor: 'white',
        textTransform: 'none',
        fontWeight: '500'
      },
      variant: 'outlined',
      component: 'span'
    },
    _react2.default.createElement(props.Icon, { style: { marginRight: '5px' } }),
    props.children
  );
};

exports.default = OutlineButton;

//# sourceMappingURL=index.js.map