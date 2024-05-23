import { useScrollContext } from "@utils/ScrollProvider";
import { Component, onCleanup, onMount } from "solid-js";
import { twMerge } from "tailwind-merge";

type NavbarItemProps = {
    title: string;
    location: number;
};

export const NavbarItem: Component<NavbarItemProps> = (props) => {
    const { activeSection, setActiveSection } = useScrollContext();

    const handleScroll = () => {
        const scrollPos = window.scrollY;
        const sectionTop = props.location;
        const sectionBottom = sectionTop + window.innerHeight;

        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            setActiveSection(props.location);
        }
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onCleanup(() => {
        window.removeEventListener("scroll", handleScroll);
    });

    const isActive = () => activeSection() === props.location;

    const onScrollClick = () => {
        window.scrollTo({
            top: props.location,
            behavior: 'smooth'
        });
        setActiveSection(props.location);
    };

    return (
        <button
            type="button"
            onClick={onScrollClick}
            class={twMerge([
                "flex pb-1.5 hover:cursor-pointer flex-row group w-fit",
                isActive() ? "text-sky-500" : "" // Highlight the active item
            ])}
        >
            <div class={twMerge([
                "mt-3 duration-400 transition-all ease-in-out h-[1px] bg-slate-500 align-middle",
                "w-8 group-hover:w-12",
                isActive() ? "bg-sky-500" : "" // Highlight the active item
            ])} />

            <h3 class={twMerge([
                "text-slate-400 ml-3 group-hover:text-slate-200 duration-400 transition-all ease-in-out",
                isActive() ? "text-sky-500" : "" // Highlight the active item
            ])}>
                {props.title}
            </h3>
        </button>
    );
};
