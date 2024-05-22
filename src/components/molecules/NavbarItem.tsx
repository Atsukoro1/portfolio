import { Component } from "solid-js";
import { twMerge } from "tailwind-merge";

type NavbarItemProps = {
    title: string;
    location: number;
};

export const NavbarItem: Component<NavbarItemProps> = (props) => {
    const onScrollClick = () => {
        window.scrollTo({
            top: props.location,
            behavior: 'smooth'
        });
    };

    return (
        <button
            type="button"
            onClick={onScrollClick}
            class="flex pb-1.5 hover:cursor-pointer flex-row group w-fit"
        >
            <div class={twMerge([
                "mt-3 duration-400  transition-all ease-in-out h-[1px] bg-slate-500 align-middle",
                "w-8 group-hover:w-12"
            ])} />

            <h3 class="text-slate-400 ml-3 group-hover:text-slate-200">
                {props.title}
            </h3>
        </button>
    )
}