import { Technology } from "@atoms/Technology";
import { TextBlock } from "@atoms/Typography";
import { For, type Component } from "solid-js";

type WorkProps = {
	fromDate: string;
	toDate: string;
	title: string;
	company: string;
	description: string;
	technologies: string[];
	hovered: boolean | null;
	onHoverStart: () => void;
	onHoverStop: () => void;
};

export const Work: Component<WorkProps> = (props) => {
	return (
		<div
			class={`${props.hovered === null
				? "opacity-100"
				: props.hovered
					? "opacity-100"
					: "opacity-40"
				} flex group hover:cursor-default flex-col lg:flex-row lg:gap-10 gap-4 p-4 border border-transparent transition-all ease-in-out transition-500 rounded-lg hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30`}
			onMouseEnter={props.onHoverStart}
			onMouseLeave={props.onHoverStop}
		>
			<section>
				<h4 class="w-[90px] text-slate-500 font-semibold text-sm">
					{props.fromDate} - {props.toDate}
				</h4>
			</section>

			<section>
				<div class="flex flex-row group-hover:text-sky-500 text-slate-300">
					<h2 class="text-md">{props.title}</h2>
					<span class="text-sm ml-2 mr-2">•</span>
					<h2 class="text-md">{props.company}</h2>
				</div>

				<TextBlock class="text-slate-400 text-sm  mt-3">
					{props.description}
				</TextBlock>

				<div class="w-fit gap-2 mt-4 flex flex-wrap">
					<For each={props.technologies}>
						{(technology) => (
							<Technology content={technology} />
						)}
					</For>
				</div>
			</section>
		</div>
	);
};
