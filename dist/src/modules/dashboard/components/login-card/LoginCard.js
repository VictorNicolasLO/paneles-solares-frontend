'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./LoginCard.css');

var _Card = require('@material-ui/core/Card');

var _Card2 = _interopRequireDefault(_Card);

var _CardActions = require('@material-ui/core/CardActions');

var _CardActions2 = _interopRequireDefault(_CardActions);

var _CardContent = require('@material-ui/core/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginCard = function (_Component) {
  _inherits(LoginCard, _Component);

  function LoginCard(props) {
    _classCallCheck(this, LoginCard);

    var _this = _possibleConstructorReturn(this, (LoginCard.__proto__ || Object.getPrototypeOf(LoginCard)).call(this, props));

    _this.writeName = function (ev) {
      _this.setState({ name: ev.target.value });
    };

    _this.writepass = function (ev) {
      _this.setState({ pass: ev.target.value });
    };

    _this.login = function () {
      _this.props.login(_this.state.name, _this.state.pass);
    };

    _this.state = {
      enableLoginButton: false,
      name: 'asda',
      pass: ''
    };
    return _this;
  }

  _createClass(LoginCard, [{
    key: 'render',
    value: function render() {
      var enableLoginButton = true;
      var name = this.state.name;
      var pass = this.state.pass;
      if (name.length > 3 && pass.length > 6) enableLoginButton = true;

      return _react2.default.createElement('div', { className: 'component-login-card' }), _react2.default.createElement(
        _Card2.default,
        { className: 'cardLogin' },
        _react2.default.createElement(
          _CardContent2.default,
          null,
          _react2.default.createElement('img', { className: 'logo-login', width: '100', src: '/tec-logo.png' }),
          _react2.default.createElement(_TextField2.default, {
            className: 'input-login',
            id: 'TxtFieldName',
            label: 'Nombre',
            onInput: this.writeName
          }),
          _react2.default.createElement(_TextField2.default, {
            className: 'input-login',
            id: 'TxtFieldPass',
            label: 'Contrase\xF1a',
            type: 'password',
            onInput: this.writepass
          })
        ),
        _react2.default.createElement(
          _CardActions2.default,
          null,
          _react2.default.createElement(
            _Button2.default,
            {
              className: 'AccederButton',
              variant: 'contained',
              color: 'primary',
              disabled: !enableLoginButton,
              onClick: this.login
            },
            'Acceder'
          )
        )
      );
    }
  }]);

  return LoginCard;
}(_react.Component);

exports.default = LoginCard;

//# sourceMappingURL=LoginCard.js.map