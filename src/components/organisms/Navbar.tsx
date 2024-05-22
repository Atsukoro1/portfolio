import { Component } from "solid-js";
import { NavbarItem } from "../molecules/NavbarItem";
import { Social } from "../molecules/Social";

export const Navbar: Component = () => {
    return (
        <section>
            <div class="lg:top-15">
                <h1 class="text-5xl font-bold text-slate-200 tracking-tighter">Jakub Dorničák</h1>
                <h2 class="text-slate-200 text-xl mt-2 font-normal tracking-tight">
                    Medior Web developer v Blindspot AI
                </h2>

                <p class="table w-[310px] font-normal mt-2.5 text-slate-400">
                    Buduju inovativní, moderní a uživatelsky přívětivé
                    webové stránky a aplikace.
                </p>

                <nav class="hidden lg:block mt-10">
                    <NavbarItem title='O mě' location={0} />
                    <NavbarItem title='Pracovní zkušenost' location={300} />
                    <NavbarItem title='Projekty' location={1000} />
                </nav>
            </div>

            <ul class="flex flex-row mt-5 lg:fixed lg:bottom-10 relative">
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
        </section>
    )
}