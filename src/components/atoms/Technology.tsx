import { Component } from "solid-js"

type TechnologyProps = {
    content: string
}

export const Technology: Component<TechnologyProps> = ({ content }) => {
    return (
        <span class="text-sky-500 bg-sky-500 bg-opacity-20 font-semibold text-[12px] p-2 rounded-full">
            {content}
        </span>
    )
}