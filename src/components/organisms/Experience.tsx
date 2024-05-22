import { Component, createSignal } from "solid-js";

import data from "../../data.json";
import { Work } from "../molecules/Work";
import { Project } from "../molecules/Project";
import { Title } from "../atoms/Typography";

export const Experience: Component = () => {
    const [hoveredProject, setHoveredProject] = createSignal<number | null>(null);
    const [hoveredWork, setHoveredWork] = createSignal<number | null>(null);

    return (
        <div>
            <div>
                <Title>Pracovní zkušenosti</Title>

                <div class="flex flex-col gap-2 lg:mt-15">
                    {data.work.map((work, index) => (
                        <Work
                            hovered={hoveredWork() === null ? null : hoveredWork() === index}
                            onHoverStart={() => {
                                setHoveredWork(index);
                            }}
                            onHoverStop={() => {
                                setHoveredWork(null);
                            }}
                            {...work}
                        />
                    ))}
                </div>
            </div>

            <div>
                <Title>Projekty</Title>

                <div class="flex flex-col gap-2 lg:mt-15">
                    {data.projects.map((project, index) => (
                        <Project
                            {...project}
                            onHoverStart={() => setHoveredProject(index)}
                            onHoverStop={() => setHoveredProject(null)}
                            hovered={hoveredProject === null ? null : hoveredProject() === index}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}