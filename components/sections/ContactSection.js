import Image from 'next/image';
import { FiInstagram, FiLinkedin, FiGithub } from "react-icons/fi"; 
import Button from "../Button";
import SectionHeading from "../SectionHeading";
import { useState } from 'react';
import { motion } from 'framer-motion'; 

export default function ContactSection() {
	const [isLoading, setIsLoading] = useState(false);
	const [isEmailSent, setIsEmailSent] = useState(null);

	const handleSubmit = () => {
		const email = "rancescuizon@gmail.com";
		const subject = "Hello, let's work together!";
		const body = "";

		const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoLink;

		setIsLoading(true);

		// Stop loading after opening the mail client
		setIsLoading(false);
		emailIsSent();
	};

	const emailIsSent = () => {
		setTimeout(() => {
			setIsEmailSent(null);
		}, 5000);
	};

	return (
		<motion.div
			initial={{ opacity: 0 }} 
			animate={{ opacity: 1 }} 
			transition={{ duration: 0.8 }} 
		>
			<br />
			<br />
			<SectionHeading
				title="Let's Work Together"
				subtitle="Looking for a developer?"
			/>
			<section className="contact" id="Contact">
				{/* Animate the image with Framer Motion */}
				<motion.div 
					className="contact__img"
					initial={{ opacity: 0, x: -50 }} // Initial state (invisible, slightly to the left)
					animate={{ opacity: 1, x: 0 }} // Animate to fully visible and centered
					transition={{ duration: 0.8 }} // Duration of the animation
				>
					<Image
						src="/images/hero.svg"
						alt="Illustration showing a developer at work"
						width={400}
						height={396}
						priority
						quality={100}
					/>
				</motion.div>

				<div className="card">
					<h2 className="heading__2">Email me!</h2>
					{isEmailSent && <div className="mb-2">{isEmailSent}</div>}

					{/* Button to trigger the email client */}
					<motion.button
						type="button"
						className="btn btn__primary"
						onClick={handleSubmit}
						disabled={isLoading}
						initial={{ scale: 0.9 }} // Initial state (slightly smaller)
						animate={{ scale: 1 }} // Animate to normal size
						whileHover={{ scale: 1.05 }} // Slightly increase size on hover
						transition={{ duration: 0.3 }}
						aria-label="Send an email to rancescuizon@gmail.com"
					>
						{isLoading ? "Sending..." : "rancescuizon@gmail.com"}
					</motion.button>

					{/* Wrapper div for the social media buttons */}
					<div className="contact__buttons">
						<motion.div
							className="social-buttons"
							initial={{ opacity: 0, y: 20 }} // Initial state (invisible and slightly down)
							animate={{ opacity: 1, y: 0 }} // Animate to fully visible and centered
							transition={{ duration: 0.6 }}
						>
							<Button
								href="https://github.com/raceczn" 
								className="btn btn__link"
								target="__blank"
								aria-label="Visit my GitHub profile"
								text={<FiGithub />} 
							/>
							<Button
								href="https://www.linkedin.com/in/rances-cuizon-ab5144338/" 
								className="btn btn__link"
								target="__blank"
								aria-label="Visit my LinkedIn profile"
								text={<FiLinkedin />} 
							/>
							<Button
								href="https://www.instagram.com/raceczn/" 
								className="btn btn__link"
								target="__blank"
								aria-label="Visit my Instagram profile"
								text={<FiInstagram />} 
							/>
						</motion.div>
					</div>
				</div>
			</section>
		</motion.div>
	);
}
