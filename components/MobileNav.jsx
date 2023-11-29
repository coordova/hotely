"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Nav from "./Nav";
import Image from "next/image";
import Socials from "./Socials";
import Link from "next/link";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu size={36} className="text-white" />
			</SheetTrigger>
			<SheetContent side="left">
				<div className="flex flex-col justify-between h-full p-12">
					{/* logo */}
					<Link href="/" className="mb-24">
						<Image
							src="/footer/logo.svg"
							width={90}
							height={46}
							alt=""
							priority
						/>
					</Link>
					{/* Nav */}
					<Nav
						containerStyles="text-block"
						listStyles="flex flex-col gap-y-6 text-xl"
					/>
					{/* Socials */}
					<Socials containerStyles="flex gap-x-4 text-black" />
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
