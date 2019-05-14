/*
 * Author: vantolbennett
 * Project: live-tours
 * File: TourItem.js
 * Class: TourItem.js
 * Copyright (c) 2019.
 * <www.tecode.io>
 */

import React, {Component} from 'react';

class TourItem extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		console.log(this.props);
		return (
			<div className="col-md-4">
				<div className="info">
					<div className="icon img-container">
						<img src={this.props.img} style={{width: "100"}} alt=""/>
					</div>
					<h4 className="info-title">{this.props.country}</h4>
					<p>Attraction: {this.props.attraction}</p>
					<a href="" target="_blank"
					   className="btn btn-primary btn-sm">
						<i className="fab fa-apple"/> Close
					</a>
				</div>
			</div>
		);
	}
}

export default TourItem;