import {Component, createEffect, createSelector, createSignal, For, Match, Show, Switch} from "solid-js"

import type {Orientation} from "@kobalte/core/navigation-menu"
import {ContentItemType, MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";
import {Tabs, TabsContent, TabsList} from "~/components/ui/tabs";
import {Grid} from "~/components/ui/grid";
import {A, useLocation} from "@solidjs/router";
import {CircleX, XIcon} from "lucide-solid";
import {cn} from "~/lib/utils";
import style from "~/components/ui/tab/tabs.module.css";
import TeamApparel from "~/components/panes/team-apparel";
import Dismissible from 'solid-dismissible'


type PROPS = {
    menu: MenuItemType[]
    slides: ContentItemType[]
    orientation?: Orientation;
}

const ApparelNavigation: Component<PROPS> = props => {
    const location = useLocation();

    const [contentRef, setContentRef] = createSignal<HTMLElement | null>(null)
    const [getOpen, setOpen] = createSignal(false)


    const menu = () => props.menu;
    const slides = () => props.slides;


    const [getTitle, setTitle] = createSignal<string>("")

    const handleSelect = (data: string) => {
        console.log("Data:", data);
        setTitle(() => data)


    };

    const isSelected = createSelector(getTitle)


    createEffect(() => {
        getTitle()?.length > 0
            ? setOpen(true)
            : setOpen(false)
    })

    return (

        <div class="block relative h-[620px] overflow-hidden bg-linear-to-l from-white to-secondary w-full  items-left space-y-4">
            <Dismissible
                noOutsidePointerEvents={false}
                element={contentRef}
                enabled={getOpen()}
                onDismiss={() => setTitle("")}
            >
                <div class={"aspect-16/10 absolute inset-y-0 h-[640px] rounded-4xl  left-0 sm:left-40 overflow-hidden z-0 flex justify-end items-center"}>

                    <TeamApparel/>

                </div>
                <Tabs class={'hidden sm:block absolute z-10 h-full w-full rounded-l-2xl'} value={getTitle()} onChange={setTitle} orientation={"horizontal"}>
                    <div class={"absolute z-40 w-full h-full flex justify-start shadow"}>
                        <TabsList class="flex flex-col items-center text-left space-y-3.5 w-40 z-40  bg-secondary">
                            <For each={menu()?.[0]?.sub}>
                                {(item: MenuItemType) => (
                                    <A
                                        href={item.href}
                                        class={cn(
                                            style.tabs__trigger,
                                            isSelected(item.title) ? "activeClass" : "text-gray-500  font-display",
                                            "group/trigger inline-flex w-40 items-center justify-start whitespace-nowrap   px-4  transition-colors disabled:pointer-events-none disabled:opacity-50 data-[active]:text-black data-[expanded]:text-black"
                                        )}
                                        on:mouseover={(event) => {
                                            event.stopPropagation()
                                            handleSelect(item.title)
                                        }}


                                    >
                                        {item.title}
                                    </A>


                                )}
                            </For>
                        </TabsList>




                        <Grid cols={3} class=" relative h-full  w-full overflow-hidden">
                            <For each={menu()?.[0]?.sub}>
                                {(item: MenuItemType) => (
                                    <TabsContent value={item.title} class="absolute inset-0 h-full w-full overflow-hidden glass rounded-2xl">

                                        <Switch>
                                            <Match when={getTitle() !== item.title}>
                                                <div class={"aspect-16/10"}>


                                                </div>
                                            </Match>
                                            <Match when={isSelected(item.title)}>
                                                <Show when={getTitle() !== ""}>
                                                    <div
                                                        class={"w-full h-8 flex items-center justify-between px-4 border-b border-primary"}>

                                                        <button onClick={() => handleSelect("")}
                                                                value={item.title}
                                                                class={"flex justify-center items-center pr-4"}>
                                                            <XIcon
                                                                class={"size-5 text-gray-500 hover:text-red-300"}/>
                                                        </button>

                                                        <A
                                                            class={"uppercase tracking-widest selectClass"}
                                                            href={item.href}>
                                                            {item.title}
                                                        </A>
                                                    </div>
                                                </Show>
                                                <div ref={setContentRef} class="relative h-full min-w-full">
                                                    <MenuLeftImagesRight
                                                        title={item.title}
                                                        href={item.href}
                                                        list={item?.sub}
                                                    >
                                                      <></>

                                                    </MenuLeftImagesRight>


                                                </div>
                                            </Match>
                                        </Switch>
                                    </TabsContent>
                                )}
                            </For>

                        </Grid>
                    </div>

                </Tabs>
            </Dismissible>

        </div>

    )
}

export {ApparelNavigation}
