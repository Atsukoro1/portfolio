import { Component } from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import { NavbarItem } from "@molecules/NavbarItem";
import { Social } from "@molecules/Social";
import { LanguageSwitch } from "@molecules/LanguageSwitch";

export const Navbar: Component = () => {
    const [t] = useTransContext();

    return (
        <section>
            <div class="lg:fixed lg:top-15">
                <h3 class="text-2xl font-normal text-slate-200 tracking-tighter">{t('header.introduction')}</h3>
                <h1 class="text-5xl font-bold text-slate-200 tracking-tighter">{t('header.name')}</h1>
                <h2 class="text-slate-200 text-xl mt-2 font-normal tracking-tight">
                    {t("header.title")}
                </h2>

                <p class="table w-[310px] font-normal mt-2.5 text-slate-400">
                    {t("header.description")}
                </p>

                <nav class="hidden lg:block mt-10">
                    <NavbarItem title={t('header.options.aboutMe')} location={0} />
                    <NavbarItem title={t('header.options.experience')} location={300} />
                    <NavbarItem title={t('header.options.projects')} location={1000} />
                </nav>
            </div>

            <div class="lg:fixed lg:bottom-10 flex flex-col gap-3 mt-5 relative">
                <LanguageSwitch />

                <ul class="flex flex-row">
                    <li class="mr-5">
                        <Social href="https://github.com/Atsukoro1" icon="github" />
                    </li>
                    <li class="mr-5">
                        <Social href="https://www.linkedin.com/in/jakub-dorni%C4%8D%C3%A1k-b6953423b/" icon="linkedin" />
                    </li>
                    <li class="mr-5">
                        <Social href="https://app.hackthebox.com/users/692313" icon="hackthebox" />
                    </li>
                </ul>
            </div>
        </section>
    )
}