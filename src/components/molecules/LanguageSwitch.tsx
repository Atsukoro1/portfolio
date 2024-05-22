import { useTransContext } from "@mbarzda/solid-i18next"
import { Component } from "solid-js"

export const LanguageSwitch: Component = () => {
    const [t, { getI18next, changeLanguage }] = useTransContext();

    const onToggleLanguage = () => {
        const nextLang = getI18next().language === "en" ? "cz" : "en";

        changeLanguage(nextLang);
    }

    return (
        <button
            type="button"
            class="text-slate-400 underline p-2 rounded-lg"
            onClick={onToggleLanguage}
        >
            {t('langSwitchTitle')}
        </button>
    )
}