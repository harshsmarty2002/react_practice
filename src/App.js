import React from "react";
import './App.css';
class App extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch("https://api.example.com/items").then((res) => res.json()).then((json) => {this.setState({
			items: json,
			DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1>MOHIT KASHYAP API </h1> {
				items.mapS	((item) => (
					<table border="1">
				<ol key = { item.id } >
				<li key={item.id}>
              {item.name} {item.price}
            </li>
					</ol>
					</table>
				))
			}
		</div>
	);
}
}

export default App;
