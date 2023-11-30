"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
// components
import Stats from "./Stats";

const About = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 768px)",
	});
	// console.log(isMobile);
	const [ref, inView] = useInView({
		// threshold: 0.5,
		threshold: !isMobile ? 0.5 : null,
	});
	return (
		<section className="py-12 xl:pt-0 xl:pb-24" ref={ref}>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row">
					{/* img */}
					<motion.div
						variants={fadeIn("right", 0.2)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.4 }}
						className="flex-1 relative"
					>
						<Image
							src={"/about/img2.png"}
							width={559}
							height={721}
							alt=""
						/>
					</motion.div>
					{/* text */}
					<motion.div
						variants={fadeIn("left", 0.5)}
						initial="hidden"
						whileInView={"show"}
						viewport={{ once: false, amount: 0.4 }}
						className="xl:max-w-[470px]"
					>
						<h2 className="h2 mb-[38px]">About Hotely</h2>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Molestias doloribus aliquid culpa voluptas
							esse nesciunt asperiores corrupti nobis
							necessitatibus fuga eius temporibus exercitationem
							nemo quod veniam, libero doloremque laborum dolorem?
							Esse, excepturi!
						</p>
						{/* stats */}
						<div className="my-5 xl:my-10 min-h-[35px]">
							{inView && <Stats />}
						</div>
						<p className="mb-10">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Porro corrupti beatae voluptas pariatur, ipsam
							earum ipsa ullam, dolorum magni eveniet hic? Sunt!
						</p>
						<Button variant="accent">Explore More</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default About;
