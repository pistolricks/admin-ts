import {Component, createSelector, createSignal, For} from "solid-js";
import {PaginationType, ProductStyle} from "~/utils/products";
import {Grid} from "~/components/ui/grid";
import {GalleryProduct} from "~/components/ui/cards/products/gallery-product";


type PROPS = {
    data: ProductStyle[]
    pagination?: PaginationType;
}

const ProductsGallery: Component<PROPS> = props => {


    const data = () => props.data;

    const pagination = () => props.pagination;

    const [getSelectedId, setSelectedId] = createSignal<string>()
    const [getSelected, setSelected] = createSignal<ProductStyle>(data()?.[0] as ProductStyle)
    const isSelected = createSelector(getSelectedId)


    console.log(pagination(), data())


    return (
        <Grid class={'mx-auto max-w-7xl  scrollbar-hide text-xs overflow-y-auto w-full border border-gray-4 divide-x divide-y divide-gray-4'}
              cols={2} colsSm={2} colsMd={4} colsLg={5} colsXl={6}>
            <For each={data()}>
                {(style: ProductStyle) => (
                    <GalleryProduct href={style.id} {...style} />
                )}
            </For>
        </Grid>
    );
};

export default ProductsGallery;
