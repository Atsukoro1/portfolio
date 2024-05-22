import { Component } from "solid-js";
import { useTransContext } from "@mbarzda/solid-i18next";

import { TextBlock, Title } from "@atoms/Typography";

const getAge = () => {
    const birthdate = new Date('2005-08-04');
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    return age;
};

export const Header: Component = () => {
    const [t] = useTransContext();

    return (
        <div class="md:mt-0 mt-10">
            <Title>{t('experience.title')}</Title>

            <TextBlock top>
                {t('experience.textShort', { age: getAge() })}
            </TextBlock>

            <TextBlock>
                {t('experience.textWorkStuff')}
            </TextBlock>

            <TextBlock>
                {t('experience.textHobbies')}
            </TextBlock>
        </div>
    )
}