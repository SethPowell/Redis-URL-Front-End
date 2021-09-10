import React, { Component } from "react";

export default class LinkPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			otherPage: "Home"
		};
	}

	render() {
		return (
			<div className="link-page-wrapper">
				<div className="navbar">
					<button onClick={() => this.props.history.push("/")}>
						{this.state.otherPage}
					</button>
				</div>
				Links Go Here
			</div>
		);
	}
}
