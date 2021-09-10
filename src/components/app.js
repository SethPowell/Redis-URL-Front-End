import React, { Component } from "react";

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<form onSubmit={this.handleSubmit()}>
					<input type="text" placeholder="URL to shorten" />
					<button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}
