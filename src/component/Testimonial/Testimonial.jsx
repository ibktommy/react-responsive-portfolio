import React from "react";
import Slide from "./Slide";

const Testimonial = () => {
	return (
		<>
			<section className="testimonial" id="clients">
				<div className="container">
					<div className="heading text-center">
						<h4>WHAT CLIENTS SAY</h4>
						<h1>Testimonial</h1>
					</div>

					<div className="slide">
						<Slide />
					</div>

					<div className="slide_button">
						<button className="btn_shadow prev_btn">
							<i className="fas fa-arrow-left"></i>
						</button>
						<button className="btn_shadow next_btn">
							<i className="fas fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial;
