'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserName = function (_React$Component) {
	_inherits(UserName, _React$Component);

	function UserName() {
		_classCallCheck(this, UserName);

		var _this = _possibleConstructorReturn(this, (UserName.__proto__ || Object.getPrototypeOf(UserName)).call(this));

		_this.state = { blog: [] };
		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	_createClass(UserName, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			axios.get('https://jsonplaceholder.typicode.com/todos').then(function (response) {
				_this2.setState({ blog: response.data.slice(0, 3) });
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(e) {
			window['funTest'](e.target.value);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			return React.createElement(
				'div',
				{ className: 'container' },
				this.state.blog.map(function (post) {
					return React.createElement(
						'div',
						{ key: post.id, className: 'item' },
						React.createElement(
							'h5',
							null,
							'Post Id: ',
							post.id
						),
						React.createElement(
							'h5',
							null,
							'Location: ',
							post.title
						),
						React.createElement(
							'button',
							{ key: post.age, onClick: _this3.handleClick, value: post.title },
							'Print my name in console'
						)
					);
				})
			);
		}
	}]);

	return UserName;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(UserName, null));
