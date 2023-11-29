import { FacebookIcon, InstagramIcon, TwitchIcon } from "lucide-react";
import Link from "next/link";

const Socials = ({ containerStyles }) => {
	return (
		<ul className={`${containerStyles}`}>
			<li>
				<Link href="/">
					<InstagramIcon />
				</Link>
			</li>
			<li>
				<Link href="/">
					<FacebookIcon />
				</Link>
			</li>
			<li>
				<Link href="/">
					<TwitchIcon />
				</Link>
			</li>
		</ul>
	);
};

export default Socials;
