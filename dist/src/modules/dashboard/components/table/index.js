"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Table(props) {
  var headers = props.headers,
      data = props.data,
      options = props.options;

  return _react2.default.createElement("div", null);
}

Table.defaultProps = {
  headers: { name: "Nombre" },
  data: [{ nombre: "" }]
};

exports.default = Table;

//# sourceMappingURL=index.js.map