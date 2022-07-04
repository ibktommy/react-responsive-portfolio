import React from "react";
import fLogo from "../pic/f_logo.png";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="container text-center top">
					<div className="img">
						<img src={fLogo} alt="footer-logo" />
					</div>
					<p>2022. All rights reserved by GorkCoder-Themes</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
