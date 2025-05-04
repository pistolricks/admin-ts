import {A, Action, useNavigate, useSubmission} from "@solidjs/router";
import {Component, createEffect, createSignal, JSXElement, Show, splitProps, ValidComponent} from "solid-js";

import {IconX} from "~/components/svg";

const FormLayout: Component<{
    action?: Action<[any], any, FormData>;
    title?: string
    imageSrc?: string
    hideLogo?: boolean
    children: JSXElement;
}> = props => {
    const sub = useSubmission<[any], any, FormData>(props.action!, (formData: FormData) => {
        for (let value of formData.values()) {
            if (value) return true;
        }
        return false;
    });

    const navigate =  useNavigate();
    const hideLogo = () => props.hideLogo ?? false;
    const title = () => props.title ?? '';
    const imageSrc = () => props.imageSrc;
    const children = () => props.children;




    createEffect(() => console.log(sub))

    return (
        <div>
            <div class="w-full h-[80dvh] bg-linear-to-b from-gray-200 to-white flex flex-col items-center justify-center px-4">
                <div class="max-w-sm w-full text-gray-600">
                    <div class="text-center py-4">
                        <Show when={!hideLogo()}>
                            <A href={'/'}>
                                <img width={150} class="mx-auto"
                                     src={imageSrc()} alt="logo"/>
                            </A>
                        </Show>
                        <div class="mt-5 space-y-2">
                            <h3 class="text-gray-800 text-2xl font-bold sm:text-3xl">
                                {title()}
                            </h3>

                        </div>
                    </div>
                    <div class="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
                    {children()}
                    </div>

                </div>
            </div>
        </div>
    )
}

export {FormLayout};
