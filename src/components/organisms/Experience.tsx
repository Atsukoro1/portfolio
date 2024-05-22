import { Component, createSignal } from "solid-js";

import { useTransContext } from "@mbarzda/solid-i18next";

import { Project, ProjectType } from "@molecules/Project";
import { Work } from "@molecules/Work";
import { Title } from "@atoms/Typography";

const ProjectsBlock = () => {
    const [t] = useTransContext();

    const [hoveredProject, setHoveredProject] = createSignal<number | null>(null);

    return (
        <div class="flex flex-col gap-2 lg:mt-15">
            <Project
                title={t("projects.content.doucInfo.title")}
                technologies={[
                    "React",
                    "Next.js",
                    "TailwindCSS",
                    "TypeScript",
                    "Stripe",
                ]}
                type={ProjectType.Link}
                href="https://douc.info"
                description={t("projects.content.doucInfo.description")}
                imagePath="https://files.catbox.moe/bk49tl.png"
                onHoverStart={() => setHoveredProject(1)}
                onHoverStop={() => setHoveredProject(null)}
                hovered={hoveredProject() === null ? null : hoveredProject() === 1}
            />

            <Project
                title={t("projects.content.contalk.title")}
                technologies={[
                    "React",
                    "Next.js",
                    "Prisma",
                    "TypeScript",
                    "TRPC",
                    "TailwindCSS",
                    "AI",
                ]}
                type={ProjectType.Link}
                href="https://github.com/Atsukoro1/meetu"
                description={t("projects.content.contalk.description")}
                imagePath="https://files.catbox.moe/y64r39.png"
                onHoverStart={() => setHoveredProject(2)}
                onHoverStop={() => setHoveredProject(null)}
                hovered={hoveredProject() === null ? null : hoveredProject() === 2}
            />

            <Project
                title={t("projects.content.novaZeme.title")}
                technologies={[
                    "Express.JS",
                    "Node.js",
                    "React Native",
                    "Tailwind CSS",
                    "Material UI",
                    "Typescript",
                ]}
                type={ProjectType.Dialog}
                href="projects.content.novaZeme.title"
                description={t("projects.content.novaZeme.description")}
                imagePath="https://files.catbox.moe/fp4j4k.png"
                onHoverStart={() => setHoveredProject(3)}
                onHoverStop={() => setHoveredProject(null)}
                hovered={hoveredProject() === null ? null : hoveredProject() === 3}
                dialog={{
                    title: t("projects.content.novaZeme.dialog.title"),
                    content: t("projects.content.novaZeme.dialog.description"),
                }}
            />
        </div>
    )
};

const WorkBlock = () => {
    const [t] = useTransContext();

    const [hoveredWork, setHoveredWork] = createSignal<number | null>(null);

    return (
        <div class="flex flex-col gap-2 lg:mt-15">
            <Work
                title={t("work.content.blindspot.title")}
                company={t("work.content.blindspot.company")}
                description={t("work.content.blindspot.description")}
                technologies={["React",
                    "Next.js",
                    "TailwindCSS",
                    "TypeScript",
                    "Apollo",
                    "GraphQL",
                ]}
                onHoverStart={() => setHoveredWork(1)}
                onHoverStop={() => setHoveredWork(null)}
                hovered={hoveredWork() === null ? null : hoveredWork() === 1}
                fromDate="2023"
                toDate={t("common.now")}
            />
            <Work
                title={t("work.content.viceverse.title")}
                company={t("work.content.viceverse.company")}
                description={t("work.content.viceverse.description")}
                technologies={["React",
                    "React",
                    "Next.js",
                    "TailwindCSS",
                    "Typescript",
                    "Linux",
                    "Prisma",
                    "PostgreSQL",
                ]}
                onHoverStart={() => setHoveredWork(2)}
                onHoverStop={() => setHoveredWork(null)}
                hovered={hoveredWork() === null ? null : hoveredWork() === 2}
                fromDate="2022"
                toDate="2024"
            />
            <Work
                title={t("work.content.woolville.title")}
                company={t("work.content.woolville.company")}
                description={t("work.content.woolville.description")}
                technologies={[
                    "Silius", "SEO", "Google Analytics"
                ]}
                onHoverStart={() => setHoveredWork(3)}
                onHoverStop={() => setHoveredWork(null)}
                hovered={hoveredWork() === null ? null : hoveredWork() === 3}
                fromDate="2021"
                toDate="2022"
            />
        </div>
    )
}

export const Experience: Component = () => {
    const [t] = useTransContext();

    return (
        <div class="flex flex-col gap-5">
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