class UserName extends React.Component{
	constructor(){
		super();
		this.state = {blog: []};
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
			this.setState({blog:response.data.slice(0, 3)});
		});
	}

	handleClick(e){
		window['funTest'](e.target.value);
	}
	
	render() {
		return(
			<div className="container">
		      {this.state.blog.map((post) =>
		      	<div key={post.id} className="item">
		      		<h5>Post Id: {post.id}</h5>
		      		<h5>Location: {post.title}</h5>
			        <button key={post.age} onClick={this.handleClick} value={post.title}>
			          Print my name in console
			        </button>
		        </div>
		      )}
		    </div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserName />);