import React from "react";
import "./Blog.css";
import "../Portfolio/Portfolio.css";
import Card from "../Blog/Card.js";
import BlogData from "./BlogData";

const Blog = () => {
	return (
		<>
			<section className="portfolio blog top" id="blog">
				<div className="container">
					<div className="heading text-center">
						<h4>VISIT MY BLOG AND KEEP YOUR FEEDBACK</h4>
						<h1>My Blog</h1>
					</div>

					<div className="content grid">
						{BlogData.map(({ id, ...props }) => {
							return <Card key={id} {...props} />;
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Blog;
