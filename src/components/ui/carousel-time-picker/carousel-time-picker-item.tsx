import {Component, createEffect, For} from 'solid-js'
import {EmblaCarouselType} from 'embla-carousel'


import createEmblaCarousel from "embla-carousel-solid"

const CIRCLE_DEGREES = 360
const WHEEL_ITEM_SIZE = 32
const WHEEL_ITEM_COUNT = 18
const WHEEL_ITEMS_IN_VIEW = 4

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW
export const WHEEL_RADIUS = Math.round(
    WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT)
)

const isInView = (wheelLocation: number, slidePosition: number): boolean =>
    Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES

const setSlideStyles = (
    emblaApi: EmblaCarouselType,
    index: number,
    loop: boolean,
    slideCount: number,
    totalRadius: number
): void => {
    const slideNode = emblaApi.slideNodes()[index]
    const wheelLocation = emblaApi.scrollProgress() * totalRadius
    const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius
    const positionLoopStart = positionDefault + totalRadius
    const positionLoopEnd = positionDefault - totalRadius

    let inView = false
    let angle = index * -WHEEL_ITEM_RADIUS

    if (isInView(wheelLocation, positionDefault)) {
        inView = true
    }

    if (loop && isInView(wheelLocation, positionLoopEnd)) {
        inView = true
        angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS
    }

    if (loop && isInView(wheelLocation, positionLoopStart)) {
        inView = true
        angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS
    }

    if (inView) {
        slideNode.style.opacity = '1'
        slideNode.style.transform = `translateY(-${
            index * 100
        }%) rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`
    } else {
        slideNode.style.opacity = '0'
        slideNode.style.transform = 'none'
    }
}

export const setContainerStyles = (
    emblaApi: EmblaCarouselType,
    wheelRotation: number
): void => {
    emblaApi.containerNode().style.transform = `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`
}

type PropType = {
    loop?: boolean
    label: string
    slideCount: number
    perspective: 'left' | 'right'
}

export const IosPickerItem: Component<PropType> = (props) => {

    const loop = () => props.loop ?? false

    const options = () => ({
        loop: loop(),
        axis: 'y' as const,
        dragFree: true,
        containScroll: 'trimSnaps' as const,
        watchSlides: false
    })
    const [emblaRef, emblaApi] = createEmblaCarousel(options)
    let rootNodeRef = (null) as unknown as HTMLDivElement
    const totalRadius = props.slideCount * WHEEL_ITEM_RADIUS
    const rotationOffset = loop() ? 0 : WHEEL_ITEM_RADIUS
    const slides = Array.from(Array(props.slideCount).keys())

    const inactivateEmblaTransform = (emblaApi: EmblaCarouselType) => {
        const {translate, slideLooper} = emblaApi.internalEngine()
        translate.clear()
        translate.toggleActive(false)
        slideLooper.loopPoints.forEach(({translate}) => {
            translate.clear()
            translate.toggleActive(false)
        })
    }

    const rotateWheel = (emblaApi: EmblaCarouselType) => {
        const rotation = props.slideCount * WHEEL_ITEM_RADIUS - rotationOffset
        const wheelRotation = rotation * emblaApi.scrollProgress()
        setContainerStyles(emblaApi, wheelRotation)
        emblaApi.slideNodes().forEach((_, index) => {
            setSlideStyles(emblaApi, index, loop(), props.slideCount, totalRadius)
        })
        return [props.slideCount, rotationOffset, totalRadius]
    }


    createEffect(() => {
        if (!emblaApi()) return

        emblaApi()?.on('pointerUp', (emblaApi) => {
            const {scrollTo, target, location} = emblaApi.internalEngine()
            const diffToTarget = target.get() - location.get()
            const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1
            const distance = diffToTarget * factor
            scrollTo.distance(distance, true)
        })

        emblaApi()?.on('scroll', rotateWheel)

        emblaApi()?.on('reInit', (emblaApi) => {
            inactivateEmblaTransform(emblaApi)
            rotateWheel(emblaApi)
        })

        const api = emblaApi()
        if (!api) return
        inactivateEmblaTransform(api)
        rotateWheel(api)
    }, [emblaApi, inactivateEmblaTransform, rotateWheel])

    return (
        <div class="embla__ios-picker">
            <div class="embla__ios-picker__scene" ref={rootNodeRef}>
                <div
                    class={`embla__ios-picker__viewport embla__ios-picker__viewport--perspective-${props.perspective}`}
                    ref={emblaRef}
                >
                    <div class="embla__ios-picker__container">
                        <For each={slides}>
                            {(_, index) => (
                                <div class="embla__ios-picker__slide">
                                    {index()}
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
            <div class="embla__ios-picker__label">{props.label}</div>
        </div>
    )
}
