import { EmblaOptionsType } from 'embla-carousel'
import { IosPickerItem } from './carousel-time-picker-item'
import { Component } from 'solid-js'

type PropType = {
    loop?: EmblaOptionsType['loop']
}

const CarouselTimePicker: Component<PropType> = (props) => {
    const { loop } = props

    return (
        <div class="embla">
            <IosPickerItem
                slideCount={24}
                perspective="left"
                loop={loop}
                label="hours"
            />
            <IosPickerItem
                slideCount={60}
                perspective="right"
                loop={loop}
                label="min"
            />
        </div>
    )
}

export default CarouselTimePicker
