import React from "react";
import Card from "../Resume/Card.js";
import "./Resume.css";
import resumedata from "./ResumeData.js";

const Resume = () => {
	return (
		<>
			<section className="resume" id="resume">
				<div className="container top">
					<div className="heading text-center">
						<h4>7+ YEARS OF EXPERIENCE</h4>
						<h1>My Resume</h1>
					</div>

					<div className="content-section mtop d_flex">
						<div className="left">
							<div className="heading">
								<h4>2007-2010</h4>
								<h1>Education Qualification</h1>
							</div>

							<div className="content">
								 {
                  resumedata.map(({ id, ...props }) => {
                    return (
                      props.category === "education" && <Card key={id} {...props}/>
                    )
                  })
                 }
							</div>
						</div>

						<div className="left">
							<div className="heading">
								<h4>2007-2010</h4>
								<h1>Job Experience</h1>
							</div>

							<div className="content">
								 {
                  resumedata.map(({ id, ...props }) => {
                    return (
                      props.category === "experience" && <Card key={id} {...props}/>
                    )
                  })
                 }
							</div>
						</div>
            
					</div>
				</div>
			</section>
		</>
	);
};

export default Resume;
