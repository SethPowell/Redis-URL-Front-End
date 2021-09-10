import React, { Component } from "react";

export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			url: "",
			otherPage: "Link Page"
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			url: event.target.value
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const url = this.state.url;
		this.setState({
			url: ""
		});
		return console.log(url);
	}

	render() {
		return (
			<div className="home-page-wrapper">
				<div className="navbar">
					<button onClick={() => this.props.history.push("/links")}>
						{this.state.otherPage}
					</button>
				</div>
				<div className="form-wrapper">
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							placeholder="URL to shorten"
							name="url-input"
							onChange={this.handleChange}
							value={this.state.url}
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}
