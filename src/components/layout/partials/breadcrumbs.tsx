import {Component, createMemo, For, Show} from "solid-js";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator
} from "~/components/ui/breadcrumb";
import {A} from "@solidjs/router";
import * as path from "node:path";
import {IconHome} from "~/components/svg";



const Breadcrumbs: Component<{
    path?: string;
}> = props => {

    const path = () => props.path ?? "";


    const splitPath = createMemo(() => {
        let s = path()?.replace(import.meta.env.VITE_APP_URL, "")
        let split = (s ?? "").split("/")
        console.log(split)
        return split
    })


    return (
        <Show when={splitPath()?.length > 0 && splitPath()?.[1]?.length > 0}>
            <div class={'flex justify-between items-center w-full pt-3 mb-3 px-0.5 text-gray-normal'}>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" as={A}>
                                <IconHome class="fill-stone-200 w-5 h-5"/>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <For each={splitPath()}>
                            {(path, i) => (
                                <Show when={i() > 0 && path?.length > 2 }>
                                    <BreadcrumbSeparator>
                                    </BreadcrumbSeparator>

                                    <BreadcrumbItem>
                                        <BreadcrumbLink current={i() + 1 === splitPath()?.length} href={splitPath()?.[1] === 'shop' ? `/shop/${path}` : `${path}`} class={"capitalize"}>{splitPath()?.[i()] }</BreadcrumbLink>
                                    </BreadcrumbItem>

                                </Show>
                            )}
                        </For>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
        </Show>
    );
};

export  {Breadcrumbs};
