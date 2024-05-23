import { JSX, Component } from 'solid-js';
import { Divider } from './Divider';

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
    displayDivider?: boolean;
}

export const Title: Component<TitleProps> = (props) => {
    return (
        <div class='py-3'>
            {props.displayDivider && <Divider />}
            <h1 class="text-slate-100 text-2xl py-1.5 font-title font-bold">{props.children}</h1>
        </div>
    );
}

export const T: Component<TextProps> = (props) => {
    return (
        <p class={`${props.highlighted ? "text-slate-100" : "text-slate-400"} inline`}>
            {props.children}
        </p>
    );
};

export const TextBlock: Component<TextBlockProps> = (props) => {
    return (
        <div class={`text-slate-400 ${top ? "mt-0" : "mt-3"} ${props.bottom ? "mb-0" : "mb-3"}`}>
            {props.children}
        </div>
    );
};
