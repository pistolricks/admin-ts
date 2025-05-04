import {Accessor, Component, Index, JSX, Match, Switch} from "solid-js"

import {Card, CardContent, CardFooter, CardHeader} from "~/components/ui/card"
import {Carousel, CarouselContent, CarouselItem} from "~/components/ui/carousel"
import {MenuItemType} from "~/lib/types";
import PromoTextImage from "~/components/section/promo/promo-text-image";
import {A} from "@solidjs/router";


export type CarouselItemProps = {
    title: string
    description: string
    cta: string
    href?: string
    src?: string
    side?: "top" | "bottom" | "both"
}

type PROPS = {
    class?: string;
    list?: MenuItemType[]
    children: (item: Accessor<MenuItemType>, index: number) => JSX.Element;
}

const BaseCarousel: Component<PROPS> = props => {

    const list: () => MenuItemType[] = () => props.list ?? [
        {
            title: "reversible-apparel",
            cta: "Shop Now",
            src: "storage/category_sports_1.jpg",
            description: "Maximize Style and Functionality with Reversible Shirts and Sweaters",
            information: "Reversible apparel represents the pinnacle of versatility in clothing design, offering two distinct looks and functionalities in a single garment. At **CustomInk and Thread**, we specialize in creating premium reversible shirts and sweaters that provide exceptional value while showcasing your creativity through innovative dual-sided customization.",
            href: "/reversible-apparel",
            value: "reversible-apparel",
            component: PromoTextImage
        }
    ];

    return (
        <Carousel
            opts={{
                align: "start"
            }}
            class={`w-full py-1 ${props.class}`}
        >
            <CarouselContent>
                <Index each={list()}>
                    {props.children}
                </Index>
            </CarouselContent>
        </Carousel>
    )
}

export default BaseCarousel;


const CarouselItemCard: Component<MenuItemType> = props => {

    const title = () => props.title;
    const description = () => props.description;
    const cta = () => props.cta;
    const href = () => props.href;
    const src = () => props.src;
    const vert_src = () => props.vert_src;
    const side = () => props.side ?? "top";

    return (
        <CarouselItem class="basis-full ">
                <Card class={'h-[89dvh] sm:h-full bg-white/40 relative'}>
                    <CardContent class="relative flex w-full h-[80dvh] sm:h-full items-center justify-center">
                        <img src={vert_src() ?? src()} class={'absolute inset-0 rounded-lg p-0.5 w-full h-full object-cover'}
                             alt={""}/>
                    </CardContent>

                    <Switch>
                        <Match when={side() === "top"}>
                            <CardHeader
                                class={'absolute top-0 w-full p-2  bg-white/40 glass rounded-t-lg'}>
                                <div class="flex-1 px-6 py-2 rounded-b-lg">
                                    <div class="font-bold text-xl mb-2">{title()}</div>
                                    <p class="text-gray-700 text-base">
                                        {description()}
                                    </p>
                                </div>
                            </CardHeader>
                        </Match>
                        <Match when={side() === "bottom"}>
                            <CardFooter
                                class={'absolute bottom-0 w-full p-2 bg-white/40 glass rounded-b-lg'}>
                                <A href={href()} class="flex-1 px-6 py-4 rounded-b-lg">
                                    <div class="font-bold text-xl">{title()}</div>
                                    <p class="text-gray-700 text-base">
                                        {description()}
                                    </p>
                                </A>
                            </CardFooter>
                        </Match>


                        <Match when={side() === "both"}>
                            <CardHeader
                                class={'absolute top-0 w-full p-2  bg-white/40 glass rounded-t-lg'}>
                                <div class="flex-1 px-6 py-2 rounded-b-lg">
                                    <div class="font-bold text-xl">{title()}</div>
                                    <p class="text-gray-700 text-base">
                                        {description()}
                                    </p>
                                </div>
                            </CardHeader>
                            <CardFooter
                                class={'absolute bottom-0 w-full p-2 bg-white/40 glass rounded-b-lg'}>
                                <div class="flex-1 px-6 py-4 rounded-b-lg">
                                    <div class="font-bold text-xl">{title()}</div>
                                    <p class="text-gray-700 text-base">
                                        {description()}
                                    </p>
                                </div>
                            </CardFooter>
                        </Match>
                    </Switch>
                </Card>

        </CarouselItem>
    );
};

export {CarouselItemCard};
