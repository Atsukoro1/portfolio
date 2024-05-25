import { useTransContext } from "@mbarzda/solid-i18next";
import { type Component, type JSX, createSignal } from "solid-js";
import { twMerge } from "tailwind-merge";

const Flag: Component<{ flag: string }> = (props) => {
	return (
		<span
			class={twMerge([
				"rounded-lg",
				props.flag === "en" ? "fi fi-cz" : "fi fi-us",
			])}
		/>
	);
};

export const LanguageSwitch: Component<JSX.HTMLAttributes<HTMLButtonElement>> =
	(props) => {
		const [_, { getI18next, changeLanguage }] = useTransContext();

		const [language, setLanguage] = createSignal(getI18next().language);

		const onToggleLanguage = () => {
			const nextLang = getI18next().language === "en" ? "cz" : "en";

			changeLanguage(nextLang);
			setLanguage(nextLang);
		};

		return (
			<button
				type="button"
				class={twMerge([
					"w-fit flex h-fit flex-row gap-2 align-middle justify-center bg-sky-400/20 text-2xl p-1.5 rounded-lg",
					props.class,
				])}
				onClick={onToggleLanguage}
			>
				<Flag flag={language()} />
			</button>
		);
	};
