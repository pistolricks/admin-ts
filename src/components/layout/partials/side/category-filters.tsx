import {Component} from "solid-js";
import Disclosure from "@corvu/disclosure";
import {classNames} from "~/lib/utils";
import {Minus, Plus} from "lucide-solid";

type PROPS = {
    name: string;
}

const CategoryFilters: Component<PROPS> = props => {
    const name = () => props.name;
    return (
        <div class="hidden sm:block relative w-[200px]" role="dialog" aria-modal="true">

            <div class=" bg-white flex  w-[200px]">
                <div
                    class="relative mx-auto flex size-full max-w-xs flex-col overflow-y-auto scrollbar-hide  bg-white  border-l border-gray-200">
                    <form class="">
                        <Disclosure collapseBehavior="hide">
                            {(props) => (
                                <>
                                    <div
                                        class={classNames(!props.expanded ? "" : "border-b border-gray-200", " flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500")}
                                        aria-controls="filter-section-mobile-0" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Brand</span>
                                        <span class="ml-6 flex items-center">
                                    <Disclosure.Trigger
                                        class="rounded-lg  p-1 transition-all duration-100 hover:text-corvu-200 active:translate-y-0.5">
                                        {props.expanded && (
                                            <>
                                                <Minus size="20"/>
                                                <span class="sr-only">Collapse</span>
                                            </>
                                        )}
                                        {!props.expanded && (
                                            <>
                                                <Plus size="20"/>
                                                <span class="sr-only">Expand</span>
                                            </>
                                        )}
                                    </Disclosure.Trigger>
                                    </span>
                                    </div>
                                    <Disclosure.Content id="filter-section-mobile-0" class={" "}>
                                        <div class=" px-4 py-6">
                                            <div class="space-y-6">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-mobile-color-0" name="color[]"
                                                                   value="white"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path
                                                                    class="opacity-0 group-has-[:checked]:opacity-100"
                                                                    d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-mobile-color-0"
                                                           class="min-w-0 flex-1 text-gray-500">
                                                        Gildan
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Content>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure collapseBehavior="hide">
                            {(props) => (
                                <>
                                    <div
                                        class={classNames(props.expanded ? "border-b border-t" : "border-t", "border-gray-200 flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500")}
                                        aria-controls="filter-section-mobile-0" aria-expanded="false">
                                    <span class="font-medium text-gray-900">
                                        Category
                                    </span>
                                        <span class="ml-6 flex items-center">
                                    <Disclosure.Trigger
                                        class="rounded-lg  p-1 transition-all duration-100 hover:text-corvu-200 active:translate-y-0.5">
                                        {props.expanded && (
                                            <>
                                                <Minus size="20"/>
                                                <span class="sr-only">Collapse</span>
                                            </>
                                        )}
                                        {!props.expanded && (
                                            <>
                                                <Plus size="20"/>
                                                <span class="sr-only">Expand</span>
                                            </>
                                        )}
                                    </Disclosure.Trigger>
                                    </span>
                                    </div>
                                    <Disclosure.Content id="filter-section-mobile-0" class="">
                                        <div class=" px-4 py-6">
                                            <div class="space-y-6">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-mobile-color-0" name="color[]"
                                                                   value="white"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path
                                                                    class="opacity-0 group-has-[:checked]:opacity-100"
                                                                    d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-mobile-color-0"
                                                           class="min-w-0 flex-1 text-gray-500">
                                                        T-Shirts
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Content>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure collapseBehavior="hide">
                            {(props) => (
                                <>
                                    <div
                                        class={classNames(props.expanded ? "border-t border-b" : "border-t", "border-gray-200 flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500")}
                                        aria-controls="filter-section-mobile-0" aria-expanded="false">
                                    <span class="font-medium text-gray-900">
                                        Color
                                    </span>
                                        <span class="ml-6 flex items-center">
                                    <Disclosure.Trigger
                                        class="rounded-lg  p-1 transition-all duration-100 hover:text-corvu-200 active:translate-y-0.5">
                                        {props.expanded && (
                                            <>
                                                <Minus size="20"/>
                                                <span class="sr-only">Collapse</span>
                                            </>
                                        )}
                                        {!props.expanded && (
                                            <>
                                                <Plus size="20"/>
                                                <span class="sr-only">Expand</span>
                                            </>
                                        )}
                                    </Disclosure.Trigger>
                                    </span>
                                    </div>
                                    <Disclosure.Content id="filter-section-mobile-0" class="">
                                        <div class=" px-4 py-6">
                                            <div class="space-y-6">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-mobile-color-0" name="color[]"
                                                                   value="white"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path
                                                                    class="opacity-0 group-has-[:checked]:opacity-100"
                                                                    d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-mobile-color-0"
                                                           class="min-w-0 flex-1 text-gray-500">
                                                        White
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Content>
                                </>
                            )}
                        </Disclosure>
                        <Disclosure collapseBehavior="hide">
                            {(props) => (
                                <>
                                    <div
                                        class={classNames(props.expanded ? "border-t" : "border-t", "border-b border-gray-200 flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500")}
                                        aria-controls="filter-section-mobile-0" aria-expanded="false">
                                    <span class="font-medium text-gray-900">
                                        Size
                                    </span>
                                        <span class="ml-6 flex items-center">
                                    <Disclosure.Trigger
                                        class="rounded-lg  p-1 transition-all duration-100 hover:text-corvu-200 active:translate-y-0.5">
                                        {props.expanded && (
                                            <>
                                                <Minus size="20"/>
                                                <span class="sr-only">Collapse</span>
                                            </>
                                        )}
                                        {!props.expanded && (
                                            <>
                                                <Plus size="20"/>
                                                <span class="sr-only">Expand</span>
                                            </>
                                        )}
                                    </Disclosure.Trigger>
                                    </span>
                                    </div>
                                    <Disclosure.Content id="filter-section-mobile-0"
                                                        class="border-b border-t border-gray-200">
                                        <div class=" px-4 py-6">
                                            <div class="space-y-6">
                                                <div class="flex gap-3">
                                                    <div class="flex h-5 shrink-0 items-center">
                                                        <div class="group grid size-4 grid-cols-1">
                                                            <input id="filter-mobile-color-0" name="color[]"
                                                                   value="white"
                                                                   type="checkbox"
                                                                   class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"/>
                                                            <svg
                                                                class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                                                                viewBox="0 0 14 14" fill="none">
                                                                <path
                                                                    class="opacity-0 group-has-[:checked]:opacity-100"
                                                                    d="M3 8L6 11L11 3.5" stroke-width="2"
                                                                    stroke-linecap="round" stroke-linejoin="round"/>
                                                                <path
                                                                    class="opacity-0 group-has-[:indeterminate]:opacity-100"
                                                                    d="M3 7H11" stroke-width="2"
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"/>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <label for="filter-mobile-color-0"
                                                           class="min-w-0 flex-1 text-gray-500">
                                                        Small
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Disclosure.Content>
                                </>
                            )}
                        </Disclosure>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default CategoryFilters;
