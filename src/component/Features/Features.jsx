import React from "react";
import Card from "./Card";
import "./Features.css";
import professions from './FeaturesApi'

const Features = () => {
	return (
		<>
			<section className="features top" id="features">
				<div className="container">
					<div className="heading">
						<h4>Features</h4>
						<h1>What I Do</h1>
					</div>

					<div className="content grid">
            {
              professions.map(({id, ...props}) => {
                return <Card key={id} {...props}/>
              })
            }
          </div>
				</div>
			</section>
		</>
	);
};

export default Features;
