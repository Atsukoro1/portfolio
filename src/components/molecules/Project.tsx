import { Component, JSX, createSignal } from "solid-js";
import { FiLink2 } from "solid-icons/fi";
import { twMerge } from "tailwind-merge";

import { Technology } from "@atoms/Technology";
import { Dialog } from "./Dialog";
import { TextBlock } from "@atoms/Typography";

export enum ProjectType {
	Link = "link",
	Dialog = "dialog",
	None = "none",
}

interface ProjectProps {
	imagePath: string;
	title: string;
	description: string;
	technologies: string[];
	dialog?: {
		title: string;
		content?: string | JSX.Element;
	};
	href?: string | null;
	hovered: boolean | null;
	type: ProjectType;
	onClick?: VoidFunction;
	onHoverStart: VoidFunction;
	onHoverStop: VoidFunction;
}

const ProjectImageSection: Component<ProjectProps> = (props) => {
	return (
		<section>
			<img
				src={props.imagePath}
				alt={props.title}
				class="rounded-lg aspect-square object-cover w-[800px] h-[200px]"
			/>
		</section>
	);
};

const ProjectContentSection: Component<ProjectProps> = (props) => {
	return (
		<section>
			<div class="flex flex-row items-center gap-1.5 align-middle">
				<h2 class="group-hover:text-sky-500 text-slate-300">{props.title}</h2>

				{props.type === ProjectType.Link && <FiLink2 class="text-slate-300" />}
			</div>

			<TextBlock class="text-slate-400 text-sm mt-3">
				{props.description}
			</TextBlock>

			<div class="w-fit gap-2 mt-4 flex flex-wrap">
				{props.technologies.map((technology) => (
					<Technology content={technology} />
				))}
			</div>
		</section>
	);
};

export const Project: Component<ProjectProps> = (props) => {
	const [dialogOpen, setDialogOpen] = createSignal<boolean>(false);
	const toggleDialog = () => setDialogOpen(!dialogOpen());

	const onProjectClick = () => {
		switch (props.type) {
			case ProjectType.Link:
				window.open(props.href ?? "", "_blank");
				break;

			case ProjectType.Dialog:
				toggleDialog();
				break;
		}
	};

	return (
		<>
			<button
				type="button"
				onClick={onProjectClick}
				class={twMerge([
					props.hovered === null
						? "opacity-100"
						: props.hovered
							? "opacity-100"
							: "opacity-40",
					props.type === ProjectType.Link && "hover:cursor-pointer",
					"transition-all text-left ease-in-out transition-500",
					"flex group flex-col gap-4 p-4 border border-transparent rounded-lg",
					"hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30",
				])}
				onMouseEnter={props.onHoverStart}
				onMouseLeave={props.onHoverStop}
			>
				<ProjectImageSection {...props} />
				<ProjectContentSection {...props} />
			</button>

			{props.type === ProjectType.Dialog && (
				<Dialog
					title={props.dialog?.title}
					open={dialogOpen()}
					subTitle={props.dialog?.content}
					onClose={toggleDialog}
				/>
			)}
		</>
	);
};
