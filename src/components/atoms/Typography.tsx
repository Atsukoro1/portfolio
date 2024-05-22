import { JSX, Component } from 'solid-js';

interface BaseTypography {
    children: JSX.Element | string | (JSX.Element | string)[];
}

type TextProps = BaseTypography & {
    highlighted?: boolean;
};

type TextBlockProps = BaseTypography & {
    top?: boolean;
    bottom?: boolean;
};

type TitleProps = {
    children: JSX.Element | string;
}

export const Title: Component<TitleProps> = ({ children }) => {
    return (
        <h1 class="text-slate-100 text-2xl py-3 font-title font-bold">{children}</h1>
    );
}

export const T: Component<TextProps> = ({ highlighted, children }) => {
    return (
        <p class={`${highlighted ? "text-slate-100" : "text-slate-400"} inline`}>
            {children}
        </p>
    );
};

export const TextBlock: Component<TextBlockProps> = ({ children, top, bottom }) => {
    return (
        <div class={`text-slate-400 ${top ? "mt-0" : "mt-3"} ${bottom ? "mb-0" : "mb-3"}`}>
            {children}
        </div>
    );
};
