import {Component, createEffect, For, JSXElement, Show} from "solid-js";
import {Tabs} from "@kobalte/core/tabs";
import style from "~/components/ui/tab/tabs.module.css";
import {createBreakpoints} from "@solid-primitives/media";
import {TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {MenuItemType} from "~/lib/types";
import MenuLeftImagesRight from "~/components/section/menu/menu-left-images-right";


type PROPS = {
    menu: MenuItemType[]
    class?: string;
    children?: JSXElement;
}

const ApparelTabs: Component<PROPS> = props => {

    const className = () => props.class;

    const children = () => props.children;

    const breakpoints = {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
    };

    const matches = createBreakpoints(breakpoints);

    createEffect(() => {
        console.log(matches.sm); // true when screen width >= 640px
        console.log(matches.lg); // true when screen width >= 1024px
        console.log(matches.xl); // true when screen width >= 1280px
    });

    const menu = () => props.menu;


    return (
        <Show
            fallback={children()}
            when={matches.sm}>




            <Tabs
                aria-label="Main navigation"
                orientation={"vertical"}
                class={`${style.tabs} ${className()}`}
            >

                <TabsList class={' overflow-y-auto scrollbar-hide'}>
                    <For each={menu()}>
                        {(item, index) => (
                            <TabsTrigger value={item.value ?? item.title} class={'text-xs h-8'}>
                                {item?.title}
                            </TabsTrigger>
                        )}
                    </For>
                    <Tabs.Indicator class={style.tabs__indicator}/>
                </TabsList>


                <For each={menu()}>
                    {(item, index) => (
                        <TabsContent value={item?.value ?? item.title}>
                            <MenuLeftImagesRight title={item.title} href={item.href} src={item.src} list={item?.sub}>
                                <></>
                            </MenuLeftImagesRight>

                        </TabsContent>
                    )}
                </For>
            </Tabs>
        </Show>
    );
};

export default ApparelTabs;
