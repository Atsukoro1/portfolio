import { Component } from "solid-js";
import { Technology } from "../atoms/Technology";
import { FiLink2 } from 'solid-icons/fi'

type ProjectProps = {
    imagePath: string;
    title: string;
    href: string | null;
    description: string;
    technologies: string[];
    hovered: boolean | null;
    onHoverStart: () => void;
    onHoverStop: () => void;
};

export const Project: Component<ProjectProps> = (props) => {
    return (
        <a target="blank" {...props.href && { href: props.href }}>
            <div
                class={`${props.hovered === null ? "opacity-100" : (props.hovered ? "opacity-100" : "opacity-40")} flex group ${props.href && "hover:cursor-pointer"} flex-col gap-4 p-4 border border-transparent transition-all ease-in-out transition-500 rounded-lg hover:bg-slate-200 hover:bg-opacity-[3%] hover:border-slate-600 hover:border-opacity-30`}
                onMouseEnter={props.onHoverStart}
                onMouseLeave={props.onHoverStop}
            >
                <section>
                    <img
                        src={`/src/assets/projects/${props.imagePath}`}
                        alt={props.title}
                        class="rounded-lg aspect-square object-cover w-[800px] h-[200px]"
                    />
                </section>

                <section>
                    <div class="flex flex-row items-center gap-1.5 align-middle">
                        <h2 class="group-hover:text-sky-500 text-slate-300">
                            {props.title}
                        </h2>

                        {props.href &&
                            (
                                <a href={props.href}>
                                    <FiLink2 class="text-slate-300" />
                                </a>
                            )
                        }
                    </div>

                    <p class="text-slate-400 text-sm mt-3">{props.description}</p>

                    <div class="w-fit gap-2 mt-4 flex flex-wrap">
                        {props.technologies.map((technology) => (
                            <Technology content={technology} />
                        ))}
                    </div>
                </section>
            </div>
        </a>
    )
};