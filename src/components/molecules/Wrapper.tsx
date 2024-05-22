import { Component, JSX } from "solid-js";

type WrapperProps = {
    children: JSX.Element | string;
}

export const Wrapper: Component<WrapperProps> = ({ children }) => {
    return (
        <div class="font-main bg-slate-900 h-full">
            <div class="w-full max-w-[1300px] h-full mx-auto">
                <div class="lg:p-20 p-7 grid grid-cols-1 lg:grid-cols-2">
                    {children}
                </div>
            </div>
        </div>
    )
}