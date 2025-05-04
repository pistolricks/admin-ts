import {Component, For} from "solid-js";
import {A} from "@solidjs/router";
import Drawer from "@corvu/drawer";
import {sideMenu} from "~/lib/utils";

type PROPS = {
    contextId: string;
}

const MenuComponent: Component<PROPS> = props => {
    const contextId = () => props.contextId;


    return (
        <div class="relative flex w-full flex-col h-full overflow-y-auto  bg-white pb-12 shadow-xl">
            <div class="">
                <div class="space-y-6 border-b border-gray-200 px-4 py-6">
                    <div class="flow-root">
                        <Drawer.Close contextId={contextId()} as={'a'} href={"/sign-in"}
                                        class="p-4 hover:bg-amber-200 hover:text-sky-400 hover:rounded-lg -m-2 block text-gray-500">
                            Sign In
                        </Drawer.Close>
                    </div>
                    <div class="flow-root">
                        <Drawer.Close contextId={contextId()} as={'a'} href={"/create-account"}
                                        class="p-4 hover:bg-amber-200 hover:text-sky-400 hover:rounded-lg -m-2 block text-gray-500">
                            Create Account
                        </Drawer.Close>
                    </div>
                </div>

                <div class="space-y-10 px-4 pb-8 pt-4" role="tabpanel" tabindex="0">

                    {/*
                    <div class="grid grid-cols-2 gap-x-4">
                        <div class="group relative text-sm">
                            <img
                                src={image1}
                                alt="Models sitting back to back, wearing Basic Tee in black and bone."
                                class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                            <Drawer.Trigger contextId={contextId()} as={A} href={"/products"} class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Products
                                <p aria-hidden="true" class="mt-1">Shop now</p>
                            </Drawer.Trigger>
                        </div>
                        <div class="group relative text-sm">
                            <img
                                src={image2}
                                alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees."
                                class="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"/>
                            <Drawer.Trigger contextId={contextId()} as={A} href={"#"} class="mt-6 block font-medium text-gray-900">
                                <span class="absolute inset-0 z-10" aria-hidden="true"></span>
                                Reversible Apparel
                            <p aria-hidden="true" class="mt-1">Shop now</p>
                            </Drawer.Trigger>
                        </div>
                    </div>
*/}
                    <div class={''}>
                        {/*
                        <Drawer.Trigger contextId={contextId()} as={A} href={"/apparel"}>
                            <p id="apparel" class="font-medium text-gray-900">
                                Menu
                            </p>
                        </Drawer.Trigger>
                        */}
                        <ul role="list" aria-labelledby="apparel"
                            class="mt-6 flex flex-col space-y-6">

                            <For each={sideMenu}>
                                {(app) => (
                                    <li class="flow-root">
                                        <Drawer.Trigger contextId={contextId()} as={A} href={app.href}
                                                        class="p-4 hover:bg-amber-200 hover:text-sky-400 hover:rounded-lg -m-2 block text-gray-500">
                                            {app.title}
                                        </Drawer.Trigger>
                                    </li>
                                )}
                            </For>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuComponent;
