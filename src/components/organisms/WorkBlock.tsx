import { useTransContext } from "@mbarzda/solid-i18next";
import { Work } from "@molecules/Work";
import { Component, createSignal } from "solid-js";

export const WorkBlock: Component = () => {
	const [t] = useTransContext();

	const [hoveredWork, setHoveredWork] = createSignal<number | null>(null);

	return (
		<div class="flex flex-col gap-2 lg:mt-15">
			<Work
				title={t("work.content.blindspot.title")}
				company={t("work.content.blindspot.company")}
				description={t("work.content.blindspot.description")}
				technologies={[
					"React",
					"Next.js",
					"TailwindCSS",
					"TypeScript",
					"Apollo",
					"GraphQL",
				]}
				onHoverStart={() => setHoveredWork(1)}
				onHoverStop={() => setHoveredWork(null)}
				hovered={hoveredWork() === null ? null : hoveredWork() === 1}
				fromDate="2023"
				toDate={t("common.now")}
			/>
			<Work
				title={t("work.content.viceverse.title")}
				company={t("work.content.viceverse.company")}
				description={t("work.content.viceverse.description")}
				technologies={[
					"React",
					"React",
					"Next.js",
					"TailwindCSS",
					"Typescript",
					"Linux",
					"Prisma",
					"PostgreSQL",
				]}
				onHoverStart={() => setHoveredWork(2)}
				onHoverStop={() => setHoveredWork(null)}
				hovered={hoveredWork() === null ? null : hoveredWork() === 2}
				fromDate="2022"
				toDate="2024"
			/>
			<Work
				title={t("work.content.woolville.title")}
				company={t("work.content.woolville.company")}
				description={t("work.content.woolville.description")}
				technologies={["Silius", "SEO", "Google Analytics"]}
				onHoverStart={() => setHoveredWork(3)}
				onHoverStop={() => setHoveredWork(null)}
				hovered={hoveredWork() === null ? null : hoveredWork() === 3}
				fromDate="2021"
				toDate="2022"
			/>
		</div>
	);
};
