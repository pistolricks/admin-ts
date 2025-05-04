import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut
} from "~/components/ui/command"
import {SearchIcon} from "lucide-solid";
import {Component, createEffect, createSignal, onCleanup, Setter} from "solid-js";

const BaseCommand: Component<{
    open: boolean;
    setOpen: Setter<boolean>;
}> = props => {

    const open = () => props.open;
    const setOpen = () => props.setOpen;

    return (
            <CommandDialog open={open()} onOpenChange={setOpen()}>

            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty class={"flex flex-col items-center mx-auto space-y-2"}>
                    No results found.
                    <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span class="text-xs">⌘</span>K
                    </kbd>
                </CommandEmpty>
                <CommandGroup heading="Search">
                    <CommandItem>
                        <SearchIcon class="mr-2 size-4" />
                        <span class={"w-full flex justify-between items-center"}>
                            <span>Search Results</span>

                            <kbd class="pointer-events-none inline-flex h-5 select-none items-center gap-1 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span class="text-xs">⌘</span>K
                        </kbd>
                        </span>

                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
            </CommandList>
        </CommandDialog>
    )
}

export default BaseCommand
