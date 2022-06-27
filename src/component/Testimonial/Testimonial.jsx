import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import testimonialData from "./TestimonialData";
import "./Testimonial.css";

const Testimonial = () => {
	const [data, setData] = useState(testimonialData)
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const lastIndex = data.length - 1
		if(index < 0) {
			setIndex(lastIndex)
		}

		if(index > lastIndex) {
			setIndex(0)
		}
	}, [index, data])

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1)
		})

		return () => clearInterval(slider)
	}, [index])

	return (
		<>
			<section className="testimonial" id="clients">
				<div className="container">
					<div className="heading text-center">
						<h4>WHAT CLIENTS SAY</h4>
						<h1>Testimonial</h1>
					</div>

					<div className="slide">
						{testimonialData.map(({ id, valueIndex, ...props}) => {
							return <Slide key={id} {...props} valueIndex={valueIndex} index={index} />;
						})}
					</div>

					<div className="slide_button">
						<button
							className="btn_shadow prev_btn"
							onClick={() => setIndex(index - 1)}
						>
							<i className="fas fa-arrow-left"></i>
						</button>
						<button
							className="btn_shadow next_btn"
							onClick={() => setIndex(index + 1)}
						>
							<i className="fas fa-arrow-right"></i>
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonial;
