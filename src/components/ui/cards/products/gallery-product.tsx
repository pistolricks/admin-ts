import {Component} from "solid-js";
import {Format} from '@ark-ui/solid/format'
import {imagePath} from "~/utils/helpers";
import {classNames} from "~/utils/helpers";
import {ProductStyle} from "~/utils/products";
import {Link} from "@tanstack/solid-router";

type PROPS = ProductStyle & { href: string }

const GalleryProduct: Component<PROPS> = props => {

    const href = () => props.href;
    const NumberWithCurrency = () => {
        return <Format.Number value={Number(props.msrp)} style="currency" currency="USD"/>
    }

    const name = () => {
        let a = props.product_title.replace(props.mill, "")
        let id = props.id;
        let t = a.replace(id, "")
        return t.replace(`.`, "")
    }

    return (
        <div class="group relative py-4">

            <Link to={href()} class="flex flex-col w-full h-full">
                <div class="sm:h-full sm:w-full mx-auto flex justify-center bg-white h-(300px)">
                    <img
                        src={`${imagePath}/${props.color_product_image}/gallery`}
                        alt={props.product_title}
                        class={classNames(
                            "rounded-lg w-11/12  h-full bg-white object-center object-contain sm:object-contain group-hover:opacity-75")}/>
                </div>
                <div class=" pt-7 text-center h-[170px] sm:h-[140px]">
                    <h3 class="text-xs font-light  text-gray-11">
                        <div class={'flex flex-col w-full justify-center capitalize'}>
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <span class={'mb-4 font-semibold text-xs'}><span
                                class={''}>{props.mill}</span> - {props.id}</span>
                            <span class={'min-h-[40px]'}>{name()}</span>

                        </div>
                    </h3>

                    <p class="mt-4 text-sm font-medium text-gray-900">{NumberWithCurrency()}+</p>
                </div>
            </Link>
            {/*
            <Drawer.Trigger
                onClick={props.onClick}
                class="absolute bottom-1 right-1 w-6 h-6"
                contextId={'product-preview-1'}>
                <IconTablet class={'stroke-gray-500 hover:stroke-amber-700 hover:fill-amber-300 size-6'}/>
            </Drawer.Trigger>
            */}
        </div>
    )
};

export {GalleryProduct};
