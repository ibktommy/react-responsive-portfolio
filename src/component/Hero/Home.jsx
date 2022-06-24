import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Home";
import hero from "../../pic/hero.png";
import skill1 from "../../pic/skill1.png";
import skill2 from "../../pic/skill2.png";
import skill3 from "../../pic/skill3.png";

const Home = () => {
	return (
		<>
			<section className="hero" id="home">
				<div className="container f_flex top">
					<div className="left top">
						<h1>
							Hi, I'm <span>Jone Lee</span>
						</h1>
						<h2>
							a
							<span>
								<Typewriter
									words={[" Professional Coder", " Developer"]}
									loop
									cursor
									cursorStyle="|"
									typeSpeed={90}
									deleteSpeed={100}
									delaySpeed={500}
								/>
							</span>
						</h2>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
