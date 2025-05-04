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
        let z = t.replace('- ', "")
        return z.replace(`.`, "")
    }

    return (
        <div class="">

            <Link to={href()} class="group relative pt-2 flex flex-col items-center overflow-hidden min-h-[400px] max-h-[600px] w-11/12">
                <div class="relative w-full mx-auto flex justify-center bg-white items-center min-h-[300px] max-h-[400px]">
                    <img
                        src={`${imagePath}/${props.color_product_image}/gallery`}
                        alt={props.product_title}
                        class={classNames(
                            "absolute inset-x-1 inset-y-0 bg-white object-center object-scale-down min-h-[300px] max-h-[400px] group-hover:opacity-75")}/>
                </div>
                <div class="relative w-full text-center h-[80px] bg-white">
                    <div class="bg-white absolute  inset-x-0 top-0 flex flex-col text-sm font-medium text-gray-11">
                          <span class={'font-semibold pt-2 text-[10px]'}><span
                              class={''}>{props.mill}</span> - {props.id}</span>
                        <span class={'text-balance px-2 pt-1 text-gray-12 text-xs'}>{name()?.replace(props.mill.toUpperCase(), "")}</span>
                    </div>

                </div>
                <p class={'absolute bottom-2 w-full flex justify-center inset-x-0 text-sm'}>{NumberWithCurrency()}+ </p>
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
