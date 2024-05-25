import { AiFillGithub, AiFillLinkedin } from "solid-icons/ai";
import { SiGmail, SiHackthebox } from "solid-icons/si";
import type { Component } from "solid-js";

type SocialProps = {
	href: string;
	icon: "github" | "linkedin" | "hackthebox" | "mail";
};

const IconRenderer = (icon: SocialProps["icon"]) => {
	switch (icon) {
		case "github":
			return <AiFillGithub font-size="30px" />;
		case "linkedin":
			return <AiFillLinkedin font-size="30px" />;
		case "hackthebox":
			return <SiHackthebox font-size="30px" />;
		case "mail":
			return <SiGmail font-size="30px" />;
	}
};

export const Social: Component<SocialProps> = (props) => {
	return (
		<a class="text-gray-300" target="about" href={props.href}>
			{IconRenderer(props.icon)}
		</a>
	);
};
