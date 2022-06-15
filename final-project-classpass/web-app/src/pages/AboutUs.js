import React from "react";
import './AboutUs.scss';
import aboutus from '../images/Aboutus.jpg';
import Header from "../HomePage/Header";
import Footer from "../HomePage/footer";

const AboutUs = () => {
    return (
       <div className="sectionabt">
		   <Header/>
		   <div className="title-about">
					<h1>About Us</h1>
			</div>
		<div className="flexbox-container-about">
			<div className="flexbox-item1-about">
				<div className="aboutcontent">
					<h3>Sweat in good company</h3>
					<p>ClassPass is revolutionizing the fitness and wellness industry by bringing together the world’s best classes and experiences into one app. Our mission? To motivate people to live inspired lives every day by introducing and seamlessly connecting them to soul-nurturing experiences.
Whether you hit up a HIIT class, unwind with a massage, stream a class from your home or reconnect with your inner high school tennis player, we make it easy to prioritize your health..</p>
					<div className="button">
						<a href="">Ready to join Us?</a>
					</div>
				</div>
				<div className="social">
					<a href=""><i className="fab fa-facebook-f"></i></a>
					<a href=""><i className="fab fa-twitter"></i></a>
					<a href=""><i className="fab fa-instagram"></i></a>
				</div>
			</div>
			<div className="flexbox-item2-about">
				{/* <img src="image/img one.jpg"> */}
                <img className="image-about" src={aboutus} alt="aboutus logo" />
			</div>
		</div>
		<Footer/>
	</div>

    );
};

export default AboutUs;