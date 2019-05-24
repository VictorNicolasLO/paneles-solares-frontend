'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _core = require('@material-ui/core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('wom');
function AcceptDialog(props) {
  return _react2.default.createElement(
    _core.Dialog,
    Object.assign({
      disableEscapeKeyDown: true,
      maxWidth: 'md',
      open: props.open,
      'aria-labelledby': 'confirmation-dialog-title'
    }, props, {
      onBackdropClick: props.onCancel
    }),
    _react2.default.createElement(
      _core.DialogTitle,
      { id: 'confirmation-dialog-title' },
      props.title
    ),
    _react2.default.createElement(
      _core.DialogContent,
      null,
      props.content
    ),
    _react2.default.createElement(
      _core.DialogActions,
      null,
      _react2.default.createElement(
        _core.Button,
        { onClick: props.onCancel, color: 'primary' },
        'Cancelar'
      ),
      _react2.default.createElement(
        _core.Button,
        { onClick: props.onAccept, color: 'primary' },
        'Aceptar'
      )
    )
  );
}

exports.default = AcceptDialog;

//# sourceMappingURL=index.js.map