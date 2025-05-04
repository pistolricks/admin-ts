import {Accessor, createContext, createSignal, JSX, onMount, Setter, useContext} from "solid-js";
import {Feature, FeatureCollection, MenuItemType, SessionUser} from "~/lib/types";

import {createStore, SetStoreFunction, Store} from "solid-js/store";
import {Extent} from "ol/extent";
import {IconVendors} from "~/components/svg";
import PromoTextImage from "~/components/section/promo/promo-text-image";
import image1 from "~/img/cta_group_1.webp"
import image2 from "~/img/cta_group_1.webp"
import image3 from "~/img/cta_group_1.webp"

type POSITION = [number, number] | undefined

export type CART_ITEM = {
    id: string,
    name: string,
    image: string,
    price: number,
    slug: string,
    brand: string,
    style: string,
    gtin: string,
    color: string,
    size: string,
    quantity: number,
}

type LayoutType = {
    currentUser: Store<SessionUser>
    setCurrentUser: SetStoreFunction<SessionUser>
    getStoreCollection: Store<FeatureCollection>
    setStoreCollection: SetStoreFunction<FeatureCollection>
    cartStore: Store<any>
    setCartStore: SetStoreFunction<any>
    getMyLocation: Accessor<Feature | undefined>
    setMyLocation: Setter<Feature | undefined>
    getViewbox: Accessor<Extent | undefined>
    setViewbox: Setter<Extent | undefined>
    getPosition: Accessor<POSITION>
    setPosition: Setter<POSITION>
    getHeight: Accessor<number>
    getIsDesktop: Accessor<boolean>
    getQuery: Accessor<string>
    setQuery: Setter<string>
}

let headerHeight = import.meta.env.VITE_HEADER_HEIGHT
let footerHeight = import.meta.env.VITE_FOOTER_HEIGHT


export const LayoutContext = createContext<LayoutType>();

export function LayoutProvider(props: { children: JSX.Element }) {

    const [currentUser, setCurrentUser] = createStore<SessionUser>({
        id: 0,
        name: "",
        email: "",
        display_name: "",
        activated: false,
        created_at: "",
        token: "",
        expiry: "",
        folder: "",
        current_location: undefined,
    })
    const [getMyLocation, setMyLocation] = createSignal<Feature | undefined>()
    const [getStoreCollection, setStoreCollection] = createStore<FeatureCollection>({
        type: "FeatureCollection",
        features: []
    })

    const [cartStore, setCartStore] = createStore({
        count: 0,
        items: [],
    });


    const [getPosition, setPosition] = createSignal<POSITION>(undefined)

    const [getViewbox, setViewbox] = createSignal<Extent | undefined>(undefined)
    const [getHeight, setHeight] = createSignal(0)
    const [getQuery, setQuery] = createSignal("")

    const handleHeight = () => {
        setHeight(() => window.innerHeight - (headerHeight) - (footerHeight))
        setIsDesktop(window.innerWidth >= 726)

        console.log('height', getHeight())
    }

    const [getIsDesktop, setIsDesktop] = createSignal(false)




    onMount(() => {
        handleHeight();

    })

    return (
        <LayoutContext.Provider value={{
            currentUser,
            setCurrentUser,
            getStoreCollection,
            setStoreCollection,
            cartStore,
            setCartStore,
            getQuery,
            setQuery,
            getViewbox,
            setViewbox,
            getMyLocation,
            setMyLocation,
            getPosition,
            setPosition,
            getHeight,
            getIsDesktop,
        }}>
            {props.children}
        </LayoutContext.Provider>
    );
}

export function useLayoutContext() {
    return useContext(LayoutContext)!
}
