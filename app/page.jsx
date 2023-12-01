import About from "@/components/About";
import Features from "@/components/Features";
import Find from "@/components/Find";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Recomendations from "@/components/Recomendations";

export default function Home() {
	return (
		<main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
			<Header />
			<Hero />
			<Features />
			<About />
			<Recomendations />
			<Find />
			<Footer />
			<div className="h-[4000px]"></div>
		</main>
	);
}
