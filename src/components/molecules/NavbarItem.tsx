import { Component } from "solid-js";

type NavbarItemProps = {
    title: string;
    location: number;
};

export const NavbarItem: Component<NavbarItemProps> = ({ title, location }) => {
    const onScrollClick = () => {
        window.scrollTo({
            top: location,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type="button"
            onClick={onScrollClick}
            class="flex pb-1.5 hover:cursor-pointer flex-row group w-fit"
        >
            <div class="mt-3 duration-400  transition-all ease-in-out h-[1px] group-hover:w-15 w-8 group-hover:bg-slate-200 bg-slate-500 align-middle" />

            <h3 class="text-slate-400 ml-3 group-hover:text-slate-200">
                {title}
            </h3>
        </button>
    )
}