import {createEffect, createSignal, For, onCleanup, Show} from 'solid-js'
import {A, useLocation} from "@solidjs/router";
import {classNames} from "~/lib/utils";
import Drawer from "@corvu/drawer";
import ProfileMenu from "~/components/layout/partials/side/profile-menu";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import Cart from "~/routes/cart";
import BaseCommand from "~/components/ui/command/command";
import {useLayoutContext} from "~/context/layout-provider";


const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const menu: { name: string, href: string }[] = [
    {name: "Apparel", href: "/apparel"},
    {name: "Workwear", href: "/workwear"},
   // {name: "School Spirit", href: "/school-spirit"},
    {name: "Team Uniforms", href: "/team-uniforms"},
    {name: "Design Lab", href: "/design-lab"},
    {name: "Popups", href: "/popups"},
]


export default function Navigation(props: { contextId: string }) {
    const [open, setOpen] = createSignal(false)

    const [getOpenSearch, setOpenSearch] = createSignal(false)


    const {cartStore, setCartStore} = useLayoutContext();

    const contextId = () => props.contextId
    const location = useLocation()


    const [isOpen, setIsOpen] = createSignal(false);

    function closeModal(): void {
        setIsOpen(false);
    }

    function openModal(): void {
        setIsOpen(true);
    }




    createEffect(() => {

        console.log(cartStore?.count, "cartStore?.count")
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpenSearch((open) => !open)
            }
        }

        document.addEventListener("keydown", down)



        onCleanup(() => {
            document.removeEventListener("keydown", down)
        })
    })


    return (
        <div class="bg-white">
            <header class="relative">
                <nav aria-label="Top">
                    <div class="hidden sm:block bg-secondary">
                        <div class="mx-auto flex h-10 max-w-7xl px-4 items-center justify-between">
                            <A href={"/"}>
                                <h1 class="flex text-center text-sm font-medium uppercase lg:flex-none">
                                    {import.meta.env.VITE_APP_NAME}
                                </h1>
                            </A>
                            <div class="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-6">
                                <A href="/create-account" class="nds-text">
                                    Create an account
                                </A>
                                <span class="h-2.5 w-px bg-gray-600" aria-hidden="true"></span>
                                <A href="/sign-in" class="nds-text">
                                    Sign in
                                </A>
                            </div>
                        </div>
                    </div>


                    <div class="bg-white">
                        <div class="mx-auto max-w-7xl">
                            <div class="border-b border-gray-200">
                                <div class="flex h-16 items-center justify-between">
                                    <div class="hidden lg:flex lg:items-center">
                                        <A href="/">
                                            <img src={'/icons/icon180x180.png'} class="pl-4 h-8 w-auto" alt="logo"/>
                                            <span class="sr-only"></span>
                                        </A>
                                    </div>

                                    <div class="hidden h-full lg:flex">
                                        <For each={menu}>
                                            {(item) => (
                                                <div class="ml-8">
                                                    <div class="flex h-full justify-center space-x-8">
                                                        <A href={item.href}
                                                           class={classNames(
                                                               location.pathname === item.href ? "activeClass" : "text-gray-500",
                                                               "flex items-center text-sm nav-text")}>
                                                            {item.name}
                                                        </A>
                                                    </div>
                                                </div>
                                            )}
                                        </For>
                                    </div>


                                    <div class="flex flex-1 items-center lg:hidden">
                                        <BaseDrawer side={"left"} contextId={"left-menu-01"}>
                                            <Drawer.Trigger contextId={"left-menu-01"} as="button"
                                                            class="pl-4 rounded-md bg-white p-2 text-gray-400">
                                                <span class="sr-only">Open menu</span>
                                                <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                     stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                                </svg>
                                            </Drawer.Trigger>

                                            <DrawerContent
                                                side={"left"}
                                                contextId={"left-menu-01"}
                                            >

                                                <ProfileMenu contextId={"left-menu-01"}/>

                                            </DrawerContent>

                                        </BaseDrawer>

                                        <button onClick={() => setOpenSearch((p) => !p)} type={"button"} class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                                            <span class="sr-only">Search</span>
                                            <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                 stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <A href="/" class="lg:hidden">
                                        <span class="sr-only">{import.meta.env.VITE_APP_NAME}</span>
                                        <img
                                            src={'/icons/icon180x180.png'}
                                            alt="" class="h-8 w-auto"/>
                                    </A>

                                    <div class="flex flex-1 items-center justify-end">
                                        <div class="flex items-center lg:ml-8">
                                            <div class="flex space-x-4">
                                                <div class="hidden lg:flex">
                                                    <button onClick={() => setOpenSearch((p) => !p)} type={"button"}
                                                            class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <span class="sr-only">Search</span>
                                                        <svg class="size-6" fill="none" viewBox="0 0 24 24"
                                                             stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                             data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <div class="flex">
                                                    <Drawer.Trigger class={""} contextId={contextId()}>
                                                        <span class="sr-only">Account</span>
                                                        <svg class="size-6" fill="none" viewBox="0 0 24 24"
                                                             stroke-width="1.5" stroke="currentColor" aria-hidden="true"
                                                             data-slot="icon"
                                                        >
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                                        </svg>
                                                    </Drawer.Trigger>
                                                </div>

                                                <BaseDrawer side={"right"} contextId={"right-menu-01"}>
                                                    <Drawer.Trigger class={"mr-4 px-2 space-x-1 py-1 border border-gray-100 rounded-sm flex justify-start items-center"} contextId={"right-menu-01"}>
                                                        <span class="sr-only">Open menu</span>
                                                        <svg
                                                            class="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                                                            fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                                            stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                                                        </svg>

                                                        <Show when={cartStore?.count > 0}>
                                                            <span class={"bg-white rounded-sm tex-gray-100"}>{cartStore?.count}</span>
                                                        </Show>


                                                        <span class="sr-only">items in cart, view bag</span>
                                                    </Drawer.Trigger>


                                                    <DrawerContent
                                                        side={"right"}
                                                        contextId={"right-menu-01"}
                                                    >

                                                        <Cart/>

                                                    </DrawerContent>

                                                </BaseDrawer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <BaseCommand open={getOpenSearch()} setOpen={setOpenSearch}/>

        </div>

    )
}
