"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Autoplay } from "swiper/modules";

// swiper styles
import "swiper/css";

// components
import { Button } from "./ui/button";
import Image from "next/image";

const recomendationData = [
	{
		name: "Shanghai Hotel",
		image: "/recommendation/hotel-1.png",
		location: "Shanghai, China",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestiae et illum doloribus debitis dolorum laboriosam inventore blanditiis! Quasi, nihil",
		price: 40,
		testimonial: {
			message:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, perspiciatis. Amet consectetur adipisicing elit.",
			personName: "Robert Rene",
		},
	},
	{
		name: "Peaks Hotel",
		image: "/recommendation/hotel-2.png",
		location: "Aspen, USA",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestiae et illum doloribus debitis dolorum laboriosam inventore blanditiis! Quasi, nihil",
		price: 80,
		testimonial: {
			message:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, perspiciatis. Amet consectetur adipisicing elit.",
			personName: "Emily Jhonson",
		},
	},
	{
		name: "Cochabamba Hotel",
		image: "/recommendation/hotel-3.png",
		location: "Cochabamba, Bolivia",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestiae et illum doloribus debitis dolorum laboriosam inventore blanditiis! Quasi, nihil",
		price: 120,
		testimonial: {
			message:
				"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, perspiciatis. Amet consectetur adipisicing elit.",
			personName: "Gonzalo Cordova",
		},
	},
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Recomendations = () => {
	return (
		<motion.section
			variants={fadeIn("up", 0.2)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
			className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-soft_green-secondary relative"
		>
			{/* slider */}
			<motion.div
				variants={fadeIn("up", 0.4)}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, amount: 0 }}
			>
				<Swiper
					modules={[Autoplay]}
					autoplay={{ delay: 4000, disableOnInteraction: true }}
					loop
					speed={2000}
				>
					{recomendationData.map((hotel, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
									{/* text */}
									<div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
										<h2 className="h2 mb-4">
											{hotel.name}
										</h2>
										<p className="text-soft_green text-sm mb-6">
											{hotel.location}
										</p>
										<p className="mb-[60px]">
											{hotel.desc}
										</p>
										<div className="flex items-center gap-x-[50px]">
											<Button
												variant="accent"
												className="px-[44px]"
											>
												Book Now
											</Button>
											<div className="text-black">
												<span className="font-bold text-2xl">
													{hotel.price}
												</span>
												<span className="text-sm">
													/Night
												</span>
											</div>
										</div>
									</div>
									{/* image & testimonial */}
									<div className="order-1 xl:order-2 flex flex-1 justify-center xl:justify-end relative h-[634px]">
										<div>
											<Image
												src={hotel.image}
												width={905}
												height={528}
												quality={100}
												alt=""
												className="xl:rounded-l-[20px]"
											/>
											<div className="bg-soft_green text-white p-4 text-center xl:text-left xl:max-w-[468px] xl:min-h-[212px] xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-xl xl:px-10">
												<p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
													{hotel.testimonial.message}
												</p>
												<p className="text-xl font-bold">
													{
														hotel.testimonial
															.personName
													}
												</p>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</motion.div>
			{/* pattern */}
			<Image
				src={"/recommendation/pattern.svg"}
				width={240}
				height={240}
				alt=""
				className="hidden xl:flex absolute left-[135px] -bottom-[120px]"
			/>
		</motion.section>
	);
};

export default Recomendations;
