import { Component } from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import { Title } from "@atoms/Typography";
import { ProjectsBlock } from "@molecules/Experience/ProjectBlock";
import { WorkBlock } from "@molecules/Experience/WorkBlock";

export const Experience: Component = () => {
    const [t] = useTransContext();

    return (
        <div class="flex flex-col gap-5">
            <div>
                <Title displayDivider>{t('work.title')}</Title>
                <WorkBlock />
            </div>

            <div>
                <Title displayDivider>{t('projects.title')}</Title>
                <ProjectsBlock />
            </div>
        </div>
    )
}