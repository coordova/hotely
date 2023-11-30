import About from "@/components/About";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
	return (
		<main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
			<Header />
			<Hero />
			<Features />
			<About />
			<Footer />
			<div className="h-[4000px]"></div>
		</main>
	);
}
