import {Component, ParentProps, Show} from "solid-js";
import Header from "~/components/layout/partials/header";
import BaseDrawer, {DrawerContent} from "~/components/ui/drawer/drawer";
import ProfileMenu from "~/components/layout/partials/side/profile-menu";
import MenuComponent from "~/components/layout/partials/menu-component";
import {useLocation} from "@solidjs/router";
import Footer from "~/components/layout/partials/footer";

type PROPS = ParentProps & {
    name: string,
}

const CentralLayout: Component<PROPS> = props => {

    const location = useLocation();

    const contextId = () => "cl-1"
    const side: () => 'top' | 'right' | 'bottom' | 'left' = () => "right"
    const children = () => props.children;


    /* md:px-6 lg:px-8 */
    return (
        <BaseDrawer side={side()} contextId={contextId()}>
            <div class="min-h-dvh h-dvh flex flex-col">
                <Header contextId={contextId()}/>
                <div class={'flex-1 flex flex-row overflow-y-hidden'}>

                    <main
                        class={'mx-auto max-w-7xl  scrollbar-hide flex-1 text-xs overflow-y-auto'}
                    >
                        {children()}
                    </main>

                    <Show when={location.pathname?.includes('shop') && !location.pathname?.includes('view')}>
                        <></>
                        {/*

                        */}
                    </Show>
                </div>
                <DrawerContent
                    side={side()}
                    contextId={contextId()}
                >

                    <ProfileMenu contextId={contextId()}/>

                    <MenuComponent contextId={contextId()}/>

                </DrawerContent>
                <Footer/>
            </div>
        </BaseDrawer>
    );
};

export default CentralLayout;
