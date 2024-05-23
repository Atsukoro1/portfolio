import { Component, JSX } from "solid-js";
import { twMerge } from "tailwind-merge";

export const Divider: Component<JSX.HTMLAttributes<HTMLHRElement>> = (props) => {
    return (
        <hr
            {...props}
            class={twMerge([
                "border-sky-600 w-[50px] border-[2.5px]",
                props.class
            ])}
        />
    )
}