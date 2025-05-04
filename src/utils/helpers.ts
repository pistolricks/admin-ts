import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const imagePath = 'https://ink-and-thread.com/cdn-cgi/imagedelivery/jYAILuSxmZBHJW3H5LQP5g';
export const imgFull = 'http://localhost:8080/insecure/rs:fill:1200:1800:0/resizing_type:fit/format:webp/g:sm/plain/'
export const img = 'http://localhost:8080/insecure/rs:fill:500:500:0/resizing_type:fit/format:webp/g:sm/plain/'
export const imgGallery = 'http://localhost:8080/insecure/rs:fill:200:150:0/resizing_type:fit/format:webp/g:sm/plain/'
export const imgSelect = 'http://localhost:8080/insecure/rs:fill:151:359:0/resizing_type:fit/g:sm/plain/'
export const imgSq = 'http://localhost:8080/insecure/rs:fill:250:250:0/resizing_type:fit/g:sm/plain/'


export type Bases = "default" | "custom"
export type Variants = "default" | "secondary" | "outline" | "ghost" | "destructive" | "link" | null | undefined

export type Sizes = "default" | "sm" | "lg" | "icon" | null | undefined

export function handleInitials(string?: string) {
    if (!string) return;
    return string?.split(' ')?.map((sp) => sp[0])
}

export function handleSplit(string?: string) {
    if (!string) return;
    return string?.trim().split(' ')
}

export function handleCamelCase(arr?: string[]) {
    if (!arr) return;

    let newArr = [];

    for (let i = 0; i < arr?.length; i++) {
        let ns = arr[i]?.trim();
        let str = ns?.[0]?.toUpperCase() + ns?.substring(1);

        newArr.push(str);
    }

    return newArr.join('');
}

export function uniq_fast(a: any) {
    var seen: { [key: string]: number } = {};
    var out = [];
    var len = a.length;
    var j = 0;
    for (var i = 0; i < len; i++) {
        var item = a[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}

export function handleUserName(string?: string) {
    if (!string) return;
    let split = handleSplit(string);
    let camelCase = handleCamelCase(split);
    return "@" + camelCase;
}

export function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
}

export function throttle(mainFunction: any, delay: number | undefined) {
    let timerFlag: ReturnType<typeof setTimeout> | null = null; // Variable to keep track of the timer

    // Returning a throttled version
    return (...args: any) => {
        if (timerFlag === null) { // If there is no timer currently running
            mainFunction(...args as [any]); // Execute the main function
            timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
                timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
            }, delay);
        }
    };
}


export function arrayDedupe<T>(array: T[], b: T, key: keyof T) {
    let items: T[] = array.filter((c: T) => c[key] !== b[key]);
    return [...items, b].reverse();

}

export function arrayRemove<T>(array: T[], b: T, key: keyof T) {
    let items: T[] = array.filter((c: T) => c[key] !== b[key]);
    return items;

}


export function capitalizeFirstLetter(str?: string) {
    if (!str) return;
    return str[0].toUpperCase() + str.slice(1);
}

export function lowerCaseString(str?: string) {
    if (!str) return;
    return str.toLowerCase();
}

export const renameKey = (oldKey: string, newKey: string, map: Map<string, any>) => {
    const old = map.get(oldKey);
    const rest = [...map].filter(r => r[0] !== oldKey);
    return new Map(
        [[newKey, old],
            ...rest]);
}
export const sideMenu = [
    {
        title: 'Reversible Apparel',
        href: '/reversible-apparel',
        description: "Looking for a unique and comfortable sweatshirt that will have you turning heads. Our reversible sweatshirts allow you to have two looks in one.",
    },
    {
        title: 'School Specials',
        href: '/school-specials',
        description: "Bring your school’s pride to life with custom graphics!  From screen printing to embroidery, heat press and DTG printing.  We offer endless options to showcase your school spirit. T-shirts, sweatshirts, hoodies, and more - designed just for you!",
    },
    {
        title: 'Our Company',
        href: '/our-company',
        description: "You envision It. We create It.",
    },
    {
        title: 'Contact Us',
        href: '/contact-us',
        description: "We're happy to answer questions and get you acquainted with Custom Ink and Thread."
    }
]



