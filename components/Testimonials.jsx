"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import Image from "next/image";

const testimonialData = [
	{
		img: "/testimonials/img-1.png",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem excepturi enim eius ut, delectus sint harum, expedita reiciendis aperiam suscipit molestias similique explicabo! Delectus ad eum perspiciatis eos magnam cum maiores ex consequuntur, deserunt hic ut aspernatur rerum tenetur aliquid quisquam facere assumenda aut ratione repellendus. Eaque, explicabo!",
		personalName: "Robert Rene",
		location: "Singapore",
	},
	{
		img: "/testimonials/img-2.png",
		message:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima ab quam optio voluptatum quibusdam inventore numquam rem laudantium quo, quaerat libero, repellendus ipsam quisquam vel facilis iure. Facere vel veniam ad nihil perspiciatis amet magnam id autem reiciendis, fugit nisi eveniet veritatis. Accusantium, perspiciatis. Impedit facilis officia magnam.",
		personalName: "Robert Rene",
		location: "Singapore",
	},
];

const Testimonials = () => {
	return (
		<motion.section
			variants={fadeIn("up", 0.4)}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0 }}
			className="bg-soft_green xl:h-[880px]"
		>
			<div className="container mx-auto">
				<Swiper
					modules={[Pagination]}
					pagination={{ clickable: true }}
					className="xl:h-[680px] overflow-hidden"
				>
					{testimonialData.map((testimonial, index) => {
						return (
							<SwiperSlide key={index}>
								<div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
									<Image
										src={testimonial.img}
										width={470}
										height={470}
										quality={100}
										alt=""
										className="hidden xl:flex"
									/>
									<div className="flex-1 bg-white/20 text-white p-12">
										<p className="text-lg leading-9 mb-8">
											{testimonial.message}
										</p>
										<p className="text-xl font-bold">
											{testimonial.personalName}
										</p>
										<p>{testimonial.location}</p>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</motion.section>
	);
};

export default Testimonials;
