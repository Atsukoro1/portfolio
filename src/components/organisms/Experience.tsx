import { Component, createSignal } from "solid-js";

import { Work } from "../molecules/Work";
import { Project } from "../molecules/Project";
import { Title } from "../atoms/Typography";
import { useTransContext } from "@mbarzda/solid-i18next";
import { useData } from "../../hooks/useData";

const ProjectsBlock = () => {
    const [hoveredProject, setHoveredProject] = createSignal<number | null>(null);

    const data = useData();

    return (
        <div class="flex flex-col gap-2 lg:mt-15">
            {data.projects.map((project, index) => (
                <Project
                    {...project}
                    onHoverStart={() => setHoveredProject(index)}
                    onHoverStop={() => setHoveredProject(null)}
                    hovered={hoveredProject() === null ? null : hoveredProject() === index}
                />
            ))}
        </div>
    )
};

const WorkBlock = () => {
    const [hoveredWork, setHoveredWork] = createSignal<number | null>(null);

    const data = useData();

    return (
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
    )
}

export const Experience: Component = () => {
    const [t] = useTransContext();

    return (
        <div>
            <div>
                <Title>{t('work.title')}</Title>
                <WorkBlock />
            </div>

            <div>
                <Title>{t('projects.title')}</Title>
                <ProjectsBlock />
            </div>
        </div>
    )
}