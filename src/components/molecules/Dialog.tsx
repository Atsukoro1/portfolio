import { Button } from "@atoms/Button";
import { Component, JSX, Show } from "solid-js";
import { twMerge } from "tailwind-merge";

interface DialogProps {
    title?: string;
    subTitle?: JSX.Element | string;
    onClose: VoidFunction;
    onConfirm?: VoidFunction;
    open?: boolean;
}

const DialogTitle: Component<Pick<DialogProps, "title">> = ({
    title
}) => {
    return (
        <div class="pb-4 flex flex-col gap-4">
            <h1 class="text-slate-400 text-3xl font-bold">{title}</h1>
            <hr class="border-slate-600" />
        </div>
    )
}

export const Dialog: Component<DialogProps> = (props) => {
    return (
        <Show when={props.open}>
            <div class={twMerge([
                "fixed inset-0 flex items-center justify-center z-50"
            ])}>
                <div class={twMerge([
                    "absolute bg-slate-800 p-4 rounded-lg w-1/2 z-10 mx-auto"
                ])}>
                    <div>
                        {props.title && <DialogTitle title={props.title} />}
                        {props.subTitle && <div class="table w-full text-slate-300">{props.subTitle}</div>}
                    </div>

                    <div class="flex flex-row gap-3 mt-4">
                        <Button
                            variant="danger"
                            onClick={props.onClose}
                        >
                            Close
                        </Button>

                        {props.onConfirm && (
                            <Button
                                variant="primary"
                                onClick={props.onConfirm}
                            >
                                Confirm
                            </Button>
                        )}
                    </div>
                </div>

                <button
                    type="button"
                    class="absolute inset-0 bg-black opacity-50 z-0"
                    onClick={props.onClose}
                />
            </div>
        </Show>
    )
}