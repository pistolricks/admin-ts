import {Component} from "solid-js";
import {ScrollingCards} from "~/components/section/category/scrolling-cards";
import categories from '~/lib/custom-apparel-menus.json'

type PROPS = {}

const Hero: Component<PROPS> = props => {


    return (
        <div>
            <ScrollingCards categories={one}/>
            <ScrollingCards categories={second}/>
            <ScrollingCards categories={third}/>
        </div>
    );
};

export default Hero;


const one = [
    {
        "name": "T-Shirts",
        "src": "http://localhost:8080/insecure/rs:fill:320:224:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/PC54_flat_front_GA16.png",
        "href": "/",
        "width": 340,
        "height": 320
    },
    {
        "name": "Hoodies",
        "src": "http://localhost:8080/insecure/rs:fill:224:320:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/TM1MW450_multiple_stack_GA22.png",
        "href": "/",
        "width": 400,
        "height": 320
    },
    {
        "name": "Hats",
        "src": "http://localhost:8080/insecure/rs:fill:224:320:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/CP82_stack.png",
        "href": "/",
        "width": 240,
        "height": 320
    },
    {
        "name": "Pants & Shorts",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/DT6107_multiple_flats_front_GA21.png",
        "href": "/",
        "width": 224,
        "height": 320
    },
]

export const second = [
    {
        "name": "Beanies",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/NF0A4VUB_pair_GA21.png",
        "href": "/shop/caps/fleece-beanies",
        "width": 280,
        "height": 320
    },
    {
        "name": "Jackets",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/578674_anthhthrblackgrey_flat_stack_ga19.png",
        "href": "/",
        "width": 240,
        "height": 320
    },
    {
        "name": "Polo Shirts",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/K572_flat_GA18.png",
        "href": "/",
        "width": 400,
        "height": 320
    },

    {
        "name": "Women's",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/MM3023_allcolors_lifestyle_FA22.png",
        "href": "/",
        "width": 300,
        "height": 320
    }
]

export const third = [
    {
        "name": "Activewear",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/NKBQ5231_All_Stacked_ga19.png",
        "href": "/",
        "width": 350,
        "height": 320
    },
    {
        "name": "Business Apparel",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/S658_hanging_GA18.png",
        "href": "/",
        "width": 224,
        "height": 320
    },
    {
        "name": "Workwear",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/CS200_Stack_FA21.png",
        "href": "/",
        "width": 350,
        "height": 320
    },
    {
        "name": "Featured Brands",
        "src": "http://localhost:8080/insecure/rs:fill:300:400:0/g:sm/plain/https://ink-and-thread.com/storage/assets/stacked/TM1MW450_multiple_stack_GA22.png",
        "href": "/",
        "width": 300,
        "height": 320
    },
]

