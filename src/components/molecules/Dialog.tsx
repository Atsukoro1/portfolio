import { Button } from "@atoms/Button";
import { useTransContext } from "@mbarzda/solid-i18next";
import { type Component, type JSX, Show } from "solid-js";
import { twMerge } from "tailwind-merge";

interface DialogProps {
	title?: string;
	subTitle?: JSX.Element | string;
	onClose: VoidFunction;
	onConfirm?: VoidFunction;
	open?: boolean;
}

const DialogTitle: Component<Pick<DialogProps, "title">> = (props) => {
	return (
		<div class="pb-4 flex flex-col gap-4">
			<h1 class="text-slate-200 text-3xl font-bold">{props.title}</h1>
			<hr class="border-slate-700" />
		</div>
	);
};

export const Dialog: Component<DialogProps> = (props) => {
	const [t] = useTransContext();

	return (
		<Show when={props.open}>
			<div
				class={twMerge(["fixed inset-0 flex items-center justify-center z-50"])}
			>
				<div
					class={twMerge([
						"absolute bg-slate-800 p-4 rounded-lg w-3/4 lg:w-1/2 z-10 mx-auto",
					])}
				>
					<div>
						{props.title && <DialogTitle title={props.title} />}
						{props.subTitle && (
							<div class="table w-full text-slate-300">{props.subTitle}</div>
						)}
					</div>

					<div class="flex flex-row gap-3 mt-4">
						<Button variant="danger" onClick={props.onClose}>
							{t("common.close")}
						</Button>

						{props.onConfirm && (
							<Button variant="primary" onClick={props.onConfirm}>
								{t("common.confirm")}
							</Button>
						)}
					</div>
				</div>

				<button
					type="button"
					class="absolute inset-0 bg-black opacity-50 z-0"
					onClick={props.onClose}
				/>
			</div>
		</Show>
	);
};
