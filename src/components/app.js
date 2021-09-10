import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LinkPage from "./linkPage";
import Home from "./home";

export default class App extends Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div className="app">
				<Switch>
					<Route
						exact
						path="/"
						render={(props) => (
							<Home {...props} changePage={this.changePage} />
						)}
					/>
					<Route
						path="/links"
						render={(props) => (
							<LinkPage {...props} changePage={this.changePage} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}
