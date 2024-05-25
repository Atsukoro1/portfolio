import { useTransContext } from "@mbarzda/solid-i18next";
import { Project, ProjectType } from "@molecules/Project";
import { type Component, createSignal } from "solid-js";

export const ProjectsBlock: Component = () => {
	const [t] = useTransContext();

	const [hoveredProject, setHoveredProject] = createSignal<number | null>(null);

	return (
		<div class="flex flex-col gap-2 lg:mt-15">
			<Project
				title={t("projects.content.doucInfo.title")}
				technologies={[
					"React",
					"Next.js",
					"TailwindCSS",
					"TypeScript",
					"Stripe",
				]}
				type={ProjectType.Link}
				href="https://douc.info"
				description={t("projects.content.doucInfo.description")}
				imagePath="https://files.catbox.moe/bk49tl.png"
				onHoverStart={() => setHoveredProject(1)}
				onHoverStop={() => setHoveredProject(null)}
				hovered={hoveredProject() === null ? null : hoveredProject() === 1}
			/>

			<Project
				title={t("projects.content.contalk.title")}
				technologies={[
					"React",
					"Next.js",
					"Prisma",
					"TypeScript",
					"TRPC",
					"TailwindCSS",
					"AI",
				]}
				type={ProjectType.Link}
				href="https://github.com/Atsukoro1/meetu"
				description={t("projects.content.contalk.description")}
				imagePath="https://files.catbox.moe/y64r39.png"
				onHoverStart={() => setHoveredProject(2)}
				onHoverStop={() => setHoveredProject(null)}
				hovered={hoveredProject() === null ? null : hoveredProject() === 2}
			/>

			<Project
				title={t("projects.content.waifuu.title")}
				technologies={[
					"Next.js",
					"Node.js",
					"React",
					"Tailwind CSS",
					"Next.UI",
					"Typescript",
					"Prisma",
					"PostgreSQL",
				]}
				type={ProjectType.Link}
				href="https://github.com/Atsukoro1/waifuu"
				description={t("projects.content.waifuu.description")}
				imagePath="https://files.catbox.moe/97f7c5.png"
				onHoverStart={() => setHoveredProject(3)}
				onHoverStop={() => setHoveredProject(null)}
				hovered={hoveredProject() === null ? null : hoveredProject() === 3}
				dialog={{
					title: t("projects.content.novaZeme.dialog.title"),
					content: t("projects.content.novaZeme.dialog.description"),
				}}
			/>
		</div>
	);
};
