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


        <Link to={href()} class="group aspect-[9/20] relative border-r border-b border-gray-200 w-full">
            <div class={"flex justify-center items-center p-2"}>
                <img src={`${imagePath}/${props.color_product_image}/gallery`} alt="TODO"
                     class="aspect-[9/16] object-center rounded-lg bg-gray-200 object-scale-down group-hover:opacity-75"/>
            </div>
            <div class="absolute bottom-0 inset-x-0 pt-10 pb-1 text-center">
                <h3 class="text-sm text-gray-900 text-pretty w-full px-1 h-14 items-start">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    {name()?.replace(props.mill.toUpperCase(), "")}
                </h3>
                <p class="px-2 mt-1 text-xs text-left text-gray-11/60 uppercase">{props.id}</p>
                <p class="text-lg font-medium text-gray-900 flex justify-between items-baseline px-2">
                    <span class={"text-xs"}>{props.mill}</span>
                    <span>{NumberWithCurrency()}+</span>
                </p>
            </div>
        </Link>



        /*
        <div class="">
            <Link to={href()} class="group relative flex flex-col items-center overflow-hidden min-h-[400px] max-h-[600px] w-11/12">
                <div class="relative w-full  flex justify-center bg-white items-center min-h-[300px] max-h-[400px]">
                    <img
                        src={`${imagePath}/${props.color_product_image}/gallery`}
                        alt={props.product_title}
                        class={classNames(
                            "w-full inset-x-1 inset-y-0 bg-white object-center object-scale-down min-h-[300px] max-h-[400px] group-hover:opacity-75")}/>
                </div>
                <div class="relative w-full text-center h-[80px] bg-white">
                    <div class="bg-white absolute  inset-x-0 top-0 flex flex-col text-sm font-medium text-gray-11">
                          <span class={'font-semibold pt-2 text-[10px]'}><span
                              class={''}>{props.mill}</span> - {props.id}</span>
                        <span class={'text-balance px-2 pt-1 text-gray-12 text-xs'}></span>
                    </div>

                </div>
                <p class={'bg-white absolute bottom-0 w-full flex justify-center inset-x-0 text-sm'}> </p>
            </Link>
        </div>

         */
    )
};

export {GalleryProduct};
