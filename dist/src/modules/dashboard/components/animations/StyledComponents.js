'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShowAnimation = undefined;

var _templateObject = _taggedTemplateLiteral(['\nfrom{\n  opacity:0;\n  transform:translateY(-20px)\n}\nto{\n  opacity:1;\n  transform:translateY(0px)\n}\n'], ['\nfrom{\n  opacity:0;\n  transform:translateY(-20px)\n}\nto{\n  opacity:1;\n  transform:translateY(0px)\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  opacity: 0;\n  animation: ', ' ', ';\n  animation-fill-mode: forwards;\n  ', '\n'], ['\n  opacity: 0;\n  animation: ', ' ', ';\n  animation-fill-mode: forwards;\n  ', '\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var animationShow = (0, _styledComponents.keyframes)(_templateObject);

var ShowAnimation = exports.ShowAnimation = _styledComponents2.default.div(_templateObject2, animationShow, function (_ref) {
  var time = _ref.time;
  return (time || '.3') + 's';
}, function (props) {
  return '\n      animation-delay:' + props.delay + 's;\n    ';
});

//# sourceMappingURL=StyledComponents.js.map