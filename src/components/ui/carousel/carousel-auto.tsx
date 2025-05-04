import {Index, Show} from "solid-js"

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "~/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "~/components/ui/carousel"
import {ContentItemType} from "~/lib/types";

export function CarouselAuto(props: { slides: ContentItemType[] }) {

    const slides = () => props.slides as ContentItemType[] ?? Array.from({ length: 5 });

    const plugin = Autoplay({  delay: 2000, stopOnInteraction: true })



    return (
        <Carousel
            plugins={[plugin]}
            class="w-full h-full p-0"
            onMouseEnter={plugin.stop}
            onMouseLeave={() => plugin.play(false)}
        >
            <CarouselContent>

                <Index each={slides()}>

                    {(item, index) => (
                        <CarouselItem class="overflow-y-hidden">
                            <Show
                                fallback={
                                    <div class="flex h-[540px] min-w-full items-center justify-center border border-gray-100">
                                        <span class="text-4xl font-semibold">{index + 1}</span>
                                    </div>
                                }
                                when={slides()?.length > 0}>
                                <></>
                            </Show>

                        </CarouselItem>
                    )}
                </Index>
            </CarouselContent>

        </Carousel>
    )
}
