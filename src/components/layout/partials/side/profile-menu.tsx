import {Component, JSXElement, lazy, Show} from "solid-js";
import {handleUserName} from "~/lib/utils";

import {Avatar} from "~/components/ui/avatar/avatar-ui";
import Drawer from "@corvu/drawer";
import {Button} from "~/components/ui/button";
import {A} from "@solidjs/router";
import {SessionUser} from "~/lib/types";
import {XIcon} from "lucide-solid";

const LogoutUserForm = lazy(() => import("~/components/module/users/logout-user-form"));
type PROPS = {
    user?: SessionUser,
    contextId: string,
    children?: JSXElement
}

const ProfileMenu: Component<PROPS> = props => {


    const user = () => props.user;
    const title = () => user()?.name ?? import.meta.env.VITE_APP_NAME;

    const contextId = () => props.contextId;

    const children = () => props.children;

    const active = (routePath: string) =>
        routePath == path() ? "border-gray-normal" : "border-transparent hover:border-gray-dim";


    const path = () => location.pathname;
    return (
        <aside id="nav-menu-1" aria-label="Side navigation" class=" flex flex-col  border-r-slate-200">
            <div class="flex flex-col gap-0 min-h-[2rem] items-start justify-start min-w-0 text-center border-b border-t border-gray-200 ">
                <div class={"flex justify-start items-center p-2 space-x-2"}>
                    <Drawer.Close contextId={contextId()} as={"div"} class=""><XIcon class={"stroke-red-400"} /></Drawer.Close>
                <h2 class="w-full text-base truncate text-slate-700 uppercase">
                    {title()}
                </h2>
                </div>
            </div>
            <div class="flex justify-start items-center gap-4 p-6 border-b border-slate-200">
                <div class="shrink-0 border border-gray-500 p-4 rounded-2xl bg-white">
                    <Avatar name={user()?.name}/>
                </div>
                <p class="w-full text-xs truncate text-slate-500">{handleUserName(user()?.name)}</p>
            </div>
            <div class="p-2 border-b border-slate-200 flex justify-between items-center w-full">


                <Show
                    fallback={
                        <>


                        </>
                    }
                    when={user()?.id}>

                    <Drawer.Trigger contextId={'sd1'} as={"div"}>
                        <Button as={A} href={'/dashboard'} variant={"link"} size={"sm"}
                                type={"button"}>DASHBOARD</Button>
                    </Drawer.Trigger>
                    <Drawer.Trigger contextId={'sd1'} as={"div"}>
                        <Button as={A} href={'/profile'} variant={"link"} size={"sm"} type={"button"}>PROFILE</Button>
                    </Drawer.Trigger>
                    <LogoutUserForm/>
                </Show>
            </div>


            {children()}

        </aside>
    );
};

export default ProfileMenu;



