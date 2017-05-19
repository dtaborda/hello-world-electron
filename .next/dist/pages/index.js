'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _patternflyReact = require('patternfly-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/damian.taborda/ws/electron/hello-world/pages/index.js?entry';
// importamos React.Component, Next.js por defecto importa React
// para soportar JSX, así que solo necesitamos traernos Component

// importamos los módulos de Electron que vamos a usar


// creamos y exportamos el componente de la home

var HomePage = function (_Component) {
	(0, _inherits3.default)(HomePage, _Component);

	function HomePage() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, HomePage);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = HomePage.__proto__ || (0, _getPrototypeOf2.default)(HomePage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			input: '',
			message: null
		}, _this.handleMessage = function (event, message) {
			// acá recibimos el mensaje del proceso **main** y lo
			// guardamos en el estado interno del componente
			_this.setState({ message: message });
		}, _this.handleChange = function (event) {
			// acá guardamos el contenido de un input en el estado
			_this.setState({ input: event.target.value });
		}, _this.handleSubmit = function (event) {
			// acá evitamos el submit del formulario y enviamos
			// al proceso **main** el contenido del input
			event.preventDefault();
			_electron.ipcRenderer.send('message', _this.state.input);
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}
	// iniciamos el estado del componente


	(0, _createClass3.default)(HomePage, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// una vez el componente se monta vamos a empezar a escuchar
			// el evento `message` que recibimos del proceso principal
			// mediante el módulo `ipcRenderer`
			_electron.ipcRenderer.on('message', this.handleMessage);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			// antes de desmontar el componente dejamos de escuchar
			// el evento `message`
			_electron.ipcRenderer.removeListener('message', this.handleMessage);
		}
	}, {
		key: 'render',
		value: function render() {
			// por último hacemos render de un H1, si hay un mensaje
			// desde el proceso **main** lo mostramos, luego el formulario
			// y por último estilizamos el H1.
			return _react2.default.createElement('div', {
				'data-jsx': 1512010088,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, _react2.default.createElement('h1', {
				'data-jsx': 1512010088,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 56
				}
			}, 'Hola Pibe!'), this.state.message && _react2.default.createElement('p', {
				'data-jsx': 1512010088,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, this.state.message), _react2.default.createElement('form', { onSubmit: this.handleSubmit, 'data-jsx': 1512010088,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 62
				}
			}, _react2.default.createElement('input', { type: 'text', onChange: this.handleChange, 'data-jsx': 1512010088,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			})), _react2.default.createElement(_patternflyReact.Alert, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}), _react2.default.createElement(_style2.default, {
				styleId: 1512010088,
				css: 'h1[data-jsx="1512010088"] {color: red;font-size: 50px;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGZ0IsQUFDUCwyQkFDUSxXQUNLLGdCQUNoQiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZGFtaWFuLnRhYm9yZGEvd3MvZWxlY3Ryb24vaGVsbG8td29ybGQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRhbW9zIFJlYWN0LkNvbXBvbmVudCwgTmV4dC5qcyBwb3IgZGVmZWN0byBpbXBvcnRhIFJlYWN0XG4vLyBwYXJhIHNvcG9ydGFyIEpTWCwgYXPDrSBxdWUgc29sbyBuZWNlc2l0YW1vcyB0cmFlcm5vcyBDb21wb25lbnRcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydGFtb3MgbG9zIG3Ds2R1bG9zIGRlIEVsZWN0cm9uIHF1ZSB2YW1vcyBhIHVzYXJcbmltcG9ydCB7IGlwY1JlbmRlcmVyIH0gZnJvbSAnZWxlY3Ryb24nO1xuXG5pbXBvcnQge1xuXHRBbGVydFxufSBmcm9tICdwYXR0ZXJuZmx5LXJlYWN0JztcblxuLy8gY3JlYW1vcyB5IGV4cG9ydGFtb3MgZWwgY29tcG9uZW50ZSBkZSBsYSBob21lXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cdC8vIGluaWNpYW1vcyBlbCBlc3RhZG8gZGVsIGNvbXBvbmVudGVcblx0c3RhdGUgPSB7XG5cdFx0aW5wdXQ6ICcnLFxuXHRcdG1lc3NhZ2U6IG51bGwsXG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHQvLyB1bmEgdmV6IGVsIGNvbXBvbmVudGUgc2UgbW9udGEgdmFtb3MgYSBlbXBlemFyIGEgZXNjdWNoYXJcblx0XHQvLyBlbCBldmVudG8gYG1lc3NhZ2VgIHF1ZSByZWNpYmltb3MgZGVsIHByb2Nlc28gcHJpbmNpcGFsXG5cdFx0Ly8gbWVkaWFudGUgZWwgbcOzZHVsbyBgaXBjUmVuZGVyZXJgXG5cdFx0aXBjUmVuZGVyZXIub24oJ21lc3NhZ2UnLCB0aGlzLmhhbmRsZU1lc3NhZ2UpXG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHQvLyBhbnRlcyBkZSBkZXNtb250YXIgZWwgY29tcG9uZW50ZSBkZWphbW9zIGRlIGVzY3VjaGFyXG5cdFx0Ly8gZWwgZXZlbnRvIGBtZXNzYWdlYFxuXHRcdGlwY1JlbmRlcmVyLnJlbW92ZUxpc3RlbmVyKCdtZXNzYWdlJywgdGhpcy5oYW5kbGVNZXNzYWdlKVxuXHR9XG5cblx0aGFuZGxlTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSkgPT4ge1xuXHRcdC8vIGFjw6EgcmVjaWJpbW9zIGVsIG1lbnNhamUgZGVsIHByb2Nlc28gKiptYWluKiogeSBsb1xuXHRcdC8vIGd1YXJkYW1vcyBlbiBlbCBlc3RhZG8gaW50ZXJubyBkZWwgY29tcG9uZW50ZVxuXHRcdHRoaXMuc2V0U3RhdGUoeyBtZXNzYWdlIH0pXG5cdH1cblxuXHRoYW5kbGVDaGFuZ2UgPSBldmVudCA9PiB7XG5cdFx0Ly8gYWPDoSBndWFyZGFtb3MgZWwgY29udGVuaWRvIGRlIHVuIGlucHV0IGVuIGVsIGVzdGFkb1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBpbnB1dDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG5cdH1cblxuXHRoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG5cdFx0Ly8gYWPDoSBldml0YW1vcyBlbCBzdWJtaXQgZGVsIGZvcm11bGFyaW8geSBlbnZpYW1vc1xuXHRcdC8vIGFsIHByb2Nlc28gKiptYWluKiogZWwgY29udGVuaWRvIGRlbCBpbnB1dFxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0aXBjUmVuZGVyZXIuc2VuZCgnbWVzc2FnZScsIHRoaXMuc3RhdGUuaW5wdXQpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gcG9yIMO6bHRpbW8gaGFjZW1vcyByZW5kZXIgZGUgdW4gSDEsIHNpIGhheSB1biBtZW5zYWplXG5cdFx0Ly8gZGVzZGUgZWwgcHJvY2VzbyAqKm1haW4qKiBsbyBtb3N0cmFtb3MsIGx1ZWdvIGVsIGZvcm11bGFyaW9cblx0XHQvLyB5IHBvciDDumx0aW1vIGVzdGlsaXphbW9zIGVsIEgxLlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDE+SG9sYSBQaWJlITwvaDE+XG5cblx0XHRcdFx0e3RoaXMuc3RhdGUubWVzc2FnZSAmJlxuXHRcdFx0XHRcdDxwPnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9wPlxuXHRcdFx0XHR9XG5cblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG5cdFx0XHRcdDwvZm9ybT5cblxuXHRcdFx0XHQ8QWxlcnQgLz5cblxuXHRcdFx0XHR7LyogPFZOYXZiYXI+XG5cdFx0XHQgICAgPFZOYXZiYXIuQnJhbmQ+XG5cdFx0XHQgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kLWljb25cIiBzcmM9XCJodHRwOi8vd3d3LnBhdHRlcm5mbHkub3JnL2Fzc2V0cy9pbWcvbG9nby1hbHQuc3ZnXCIgYWx0PVwiXCIvPjxpbWdcblx0XHRcdCAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kLW5hbWVcIiBzcmM9XCJodHRwOi8vd3d3LnBhdHRlcm5mbHkub3JnL2Fzc2V0cy9pbWcvYnJhbmQtYWx0LnN2Z1wiXG5cdFx0XHQgICAgICAgIGFsdD1cIlBhdHRlcm5GbHkgRW50ZXJwcmlzZSBBcHBsaWNhdGlvblwiLz5cblx0XHRcdCAgICA8L1ZOYXZiYXIuQnJhbmQ+XG5cdFx0XHQgICAgPFZOYXZiYXIuTGVmdFBhbmVsPlxuXHRcdFx0ICAgICAgICA8TmF2SXRlbT48YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHQgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtLWljb25pYyBuYXYtaXRlbS1pY29uaWMtbmV3LXdpbmRvd1wiPjxzcGFuXG5cdFx0XHQgICAgICAgICAgICB0aXRsZT1cIkxhdW5jaFwiIGNsYXNzTmFtZT1cImZhIGZhLWV4dGVybmFsLWxpbmtcIj48L3NwYW4+PC9hPjwvTmF2SXRlbT5cblx0XHRcdCAgICA8L1ZOYXZiYXIuTGVmdFBhbmVsPlxuXHRcdFx0ICAgIDxWTmF2YmFyLlJpZ2h0UGFuZWw+XG5cdFx0XHQgICAgICAgIDxOYXZJbmZvTGlzdCBpZD0naWQxJyBsYWJlbD0nTm90aWZpY2F0aW9uJyBvbkNsZWFyPXsoKT0+Y29uc29sZS5sb2coJ2hvbGEnKX0+XG5cdFx0XHQgICAgICAgICAgICA8TmF2SW5mb0l0ZW0gbGFiZWw9J01vZGlmaWVkIERhdGFzb3VyY2VzIEV4YW1wbGVEUycgLz5cblx0XHRcdCAgICAgICAgICAgIDxOYXZJbmZvSXRlbSBsYWJlbD0nVGVzdCBNZXNzYWdlJyAvPlxuXHRcdFx0ICAgICAgICAgICAgPE5hdkluZm9JdGVtIGxhYmVsPSdFcnJvcjogU3lzdGVtIEZhaWx1cmUnIC8+XG5cdFx0XHQgICAgICAgIDwvTmF2SW5mb0xpc3Q+XG5cdFx0XHQgICAgICAgIDxOYXZEcm9wRG93biBuYW1lPSdIZWxwJyBpY29uPSdwZmljb24taGVscCc+XG5cdFx0XHQgICAgICAgICAgICA8TmF2RHJvcERvd25JdGVtIGxhYmVsPSdIZWxwJyBvblNlbGVjdD17KCk9PmNvbnNvbGUubG9nKCdob2xhJyl9IHBheWxvYWQ9e3tjb21tYW5kOiAnaGVscCd9fS8+XG5cdFx0XHQgICAgICAgICAgICA8TmF2RHJvcERvd25JdGVtIGxhYmVsPSdBYm91dCcgb25TZWxlY3Q9eygpPT5jb25zb2xlLmxvZygnaG9sYScpfSBwYXlsb2FkPXt7Y29tbWFuZDogJ2Fib3V0J319Lz5cblx0XHRcdCAgICAgICAgPC9OYXZEcm9wRG93bj5cblx0XHRcdCAgICAgICAgPE5hdkRyb3BEb3duIG5hbWU9J1VzZXInIGljb249J3BmaWNvbi11c2VyJz5cblx0XHRcdCAgICAgICAgICAgIDxOYXZEcm9wRG93bkl0ZW0gbGFiZWw9J1ByZWZlcmVuY2VzJyBvblNlbGVjdD17KCk9PmNvbnNvbGUubG9nKCdob2xhJyl9IHBheWxvYWQ9e3tjb21tYW5kOiAncHJlZmVyZW5jZXMnfX0vPlxuXHRcdFx0ICAgICAgICAgICAgPE5hdkRyb3BEb3duSXRlbSBsYWJlbD0nTG9nb3V0JyBvblNlbGVjdD17KCk9PmNvbnNvbGUubG9nKCdob2xhJyl9IHBheWxvYWQ9e3tjb21tYW5kOiAnbG9nb3V0J319Lz5cblx0XHRcdCAgICAgICAgPC9OYXZEcm9wRG93bj5cblx0XHRcdCAgICA8L1ZOYXZiYXIuUmlnaHRQYW5lbD5cblx0XHRcdDwvVk5hdmJhcj4gKi99XG5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGgxIHtcblx0XHRcdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDUwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
			}));
		}
	}]);

	return HomePage;
}(_react.Component);

exports.default = HomePage;