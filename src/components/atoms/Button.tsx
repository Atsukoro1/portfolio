import { Component, JSX } from "solid-js";
import { cva } from "class-variance-authority";

type ButtonVariant = "primary" | "danger" | "outline";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ButtonVariant;
}

const styles = cva("px-4 py-2 rounded-lg", {
    variants: {
        variant: {
            primary: "bg-sky-500/50 text-sky-500",
            danger: "bg-red-800/40 text-red-500",
            outline: "bg-transparent border border-sky-500 text-sky-500"
        }
    }
});

export const Button: Component<ButtonProps> = (props) => {
    const { variant, class: className, ...rest } = props;

    return (
        <button
            type="button"
            {...rest}
            class={styles({ variant, class: className })}
        >
            {props.children}
        </button>
    );
};
