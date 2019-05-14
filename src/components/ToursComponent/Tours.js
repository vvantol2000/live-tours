/*
 * Author: vantolbennett
 * Project: live-tours
 * File: Tours.js
 * Class: Tours.js
 * Copyright (c) 2019.
 * <www.tecode.io>
 */

import React, {Component} from 'react';
import TourItem from './TourItem';
import { tourData } from "../../TourData";

class Tours extends Component {
	state = {
		tourData: tourData
	};
	removeTour = (id) => {
		const {tours} = this.state.tourData;
		const sortedTour = tours.filter((tour) => tour.id !== id);
		this.setState({
			tourData: sortedTour
		})
	};

	render() {
		const tours = this.state.tourData.map((tour) =>{
			return (
				<TourItem key={tour.id}
				          country={tour.country}
				          img={tour.img}
				          attraction={tour.attraction}
				          removeTour={this.removeTour}
				/>
				)
		});

		return (
			<div className="">
				<div className="row">
					{tours}
				</div>
			</div>
		);
	}
}

export default Tours;