/*
 * Author: vantolbennett
 * Project: live-tours
 * File: SectionPara.js
 * Class: SectionPara.js
 * Copyright (c) 2019.
 * <www.tecode.io>
 */

import React from 'react';

const logo = '../img/profile_city.jpg';
const Section = () => {
	return (
		<div className="page-header header-filter" data-parallax="true"
		     style={{backgroundImage: `url(${logo})`}}>
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<h1 className="title">Your Story Starts With Us.</h1>
						<h4>Every visit begins with us</h4>
						<br/>
						<a href="" target="_blank"
						   className="btn btn-danger btn-raised btn-lg">
							<i className="fab fa-cc-discover"/> Make Arrangements
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section;
