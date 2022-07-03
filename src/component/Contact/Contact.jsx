import React, { useState } from "react";
import "./Contact.css";
import image from "../../pic/contact1.png";

const Contact = () => {
	const [data, setData] = useState({
		fullname: "",
		phone: "",
		email: "",
		subject: "",
		message: "",
	});

	// Event Function when Change is made in the Form-Input
	const InputEvent = (event) => {
		const { name, value } = event.target;

		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	// Event Function When Form is Submitted
	const formSubmit = (event) => {
		event.preventDefault();
		alert(`
      My name is ${data.fullname}
      My email is ${data.email}
      My number is ${data.phone}
      My subject is ${data.subject}
      My message is ${data.message}
    `);
	};

	return (
		<>
			<section className="contact" id="contact">
				<div className="contaner-top">
					<div className="heading text-center">
						<h4>CONTACT</h4>
						<h1>Connect With Me</h1>
					</div>

					<div className="container d_flex">
						<div className="left">
							<div className="box box_shadow">
								<div className="img">
									<img src={image} alt="contact" />
								</div>
								<div className="details">
									<h1>Nevine Acotanze</h1>
									<p>
										I am available for freelance work. Connect with me via and
										call in to my account.
									</p>
									<p>Phone: +0123456789</p>
									<p>Email: admin@email.com</p>
									<span>FIND ME WITH</span>
									<div className="button d_flex">
										<button className="btn_shadown">
											<i className="fab fa-facebook-f"></i>
										</button>
										<button className="btn_shadown">
											<i className="fab fa-instagram"></i>
										</button>
										<button className="btn_shadown">
											<i className="fab fa-twitter"></i>
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="right box_shadown">
							<form onSubmit={formSubmit}>
								<div className="f_flex">
									<div className="input row">
										<span>YOUR NAME</span>
										<input
											type="text"
											name="fullname"
											value={data.fullname}
											onChange={InputEvent}
										/>
									</div>
									<div className="input row">
										<span>YOUR NUMBER</span>
										<input
											type="phone"
											name="phone"
											value={data.phone}
											onChange={InputEvent}
										/>
									</div>
									<div className="input">
										<span>EMAIL</span>
										<input
											type="email"
											name="email"
											value={data.email}
											onChange={InputEvent}
										/>
									</div>
									<div className="input">
										<span>SUBJECT</span>
										<input
											type="text"
											name="subject"
											value={data.subject}
											onChange={InputEvent}
										/>
									</div>
									<div className="input">
										<span>YOUR MESSAGE</span>
										<textarea
											cols="30"
											name="message"
											value={data.message}
											onChange={InputEvent}
										/>
									</div>
									<button className="btn_shadow">
										SEND MESSAGE
										<i className="fa fa-long-arrow-down"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
