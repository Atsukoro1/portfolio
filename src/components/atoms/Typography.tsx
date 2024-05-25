import type { JSX, Component } from "solid-js";
import { Divider } from "./Divider";
import { twMerge } from "tailwind-merge";

interface BaseTypography extends JSX.HTMLAttributes<HTMLParagraphElement> {
	children: JSX.Element | string | (JSX.Element | string)[];
}

type TextProps = BaseTypography & {
	highlighted?: boolean;
};

type TextBlockProps = BaseTypography & {
	top?: boolean;
	bottom?: boolean;
};

type TitleProps = {
	children: JSX.Element | string;
	displayDivider?: boolean;
} & BaseTypography;

export const Title: Component<TitleProps> = (props) => {
	return (
		<div class="py-3">
			{props.displayDivider && <Divider />}
			<h1
				class={twMerge([
					"text-slate-100 text-2xl py-1.5 font-title font-bold",
					props.class,
				])}
			>
				{props.children}
			</h1>
		</div>
	);
};

export const T: Component<TextProps> = (props) => {
	return (
		<p
			class={twMerge([
				"inline",
				props.highlighted ? "text-slate-100" : "text-slate-400",
				props.class,
			])}
		>
			{props.children}
		</p>
	);
};

export const TextBlock: Component<TextBlockProps> = (props) => {
	return (
		<div
			{...props}
			class={twMerge([
				"text-slate-400 text-justify",
				props.bottom ? "mb-0" : "mb-3",
				top ? "mt-0" : "mt-3",
				props.class,
			])}
		>
			{props.children}
		</div>
	);
};
