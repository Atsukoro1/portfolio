import { useTransContext } from "@mbarzda/solid-i18next";

export const useData = () => {
	const [t] = useTransContext();

	return {
		work: [
			{
				fromDate: "2023",
				toDate: "Nyní",
				title: t("work.content.blindspot.title"),
				company: t("work.content.blindspot.company"),
				description: t("work.content.blindspot.description"),
				position: t("work.content.blindspot.position"),
				technologies: [
					"React",
					"Next.js",
					"TailwindCSS",
					"TypeScript",
					"Apollo",
					"GraphQL",
				],
			},
			{
				fromDate: "2022",
				toDate: "2023",
				title: t("work.content.viceverse.title"),
				company: t("work.content.viceverse.company"),
				description: t("work.content.viceverse.description"),
				position: t("work.content.viceverse.position"),
				technologies: [
					"React",
					"Next.js",
					"TailwindCSS",
					"Typescript",
					"Linux",
					"Prisma",
					"PostgreSQL",
				],
			},
			{
				fromDate: "2021",
				toDate: "2022",
				title: t("work.content.woolville.title"),
				company: t("work.content.woolville.company"),
				description: t("work.content.woolville.description"),
				position: t("work.content.wollville.position"),
				technologies: ["Silius"],
			},
		],
		projects: [
			{
				imagePath: "/doucinfo.png",
				title: t("projects.content.doucInfo.title"),
				href: "https://douc.info",
				description: t("projects.content.doucInfo.description"),
				technologies: [
					"React",
					"Next.js",
					"TailwindCSS",
					"TypeScript",
					"Stripe",
				],
			},
			{
				imagePath: "/contalk.png",
				title: t("projects.content.contalk.title"),
				href: "https://github.com/Atsukoro1/meetu",
				description: t("projects.content.contalk.description"),
				technologies: [
					"React",
					"Next.js",
					"Prisma",
					"TypeScript",
					"TRPC",
					"TailwindCSS",
					"AI",
				],
			},
			{
				imagePath: "/novazeme.png",
				title: t("projects.content.novaZeme.title"),
				href: null,
				description: t("projects.content.novaZeme.description"),
				technologies: [
					"Express.JS",
					"Node.js",
					"React Native",
					"Tailwind CSS",
					"Material UI",
					"Typescript",
				],
			},
		],
	};
};
