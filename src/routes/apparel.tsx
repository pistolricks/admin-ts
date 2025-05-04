import {createFileRoute, Outlet} from '@tanstack/solid-router'
import axios from 'redaxios'
import {DEPLOY_URL} from '~/utils/users'
import type {StylesResponse} from '~/utils/products'
import {createEffect, For, Show} from 'solid-js'
import {GalleryProduct} from "~/components/ui/cards/products/gallery-product";
import ProductsGallery from "~/components/ui/sections/products/products-gallery";


export const Route = createFileRoute('/apparel')({
    loader: async () => {
        return await axios
            .get<StylesResponse>(DEPLOY_URL + '/api/apparel')
            .then((r) => r.data)
            .catch(() => {
                throw new Error('Failed to fetch products')
            })
    },
    component: ProductsComponent,
    // validateSearch: (search: Record<string, unknown>) => ({
    //     productId: String(search.productId),
    // }),
})


function ProductsComponent() {
    const data = Route.useLoaderData()

    /*
        function createVirtualizer<TScrollElement extends Element | Window, TItemElement extends Element>(
            options: PartialKeys<
                VirtualizerOptions<TScrollElement, TItemElement>,
                'observeElementRect' | 'observeElementOffset' | 'scrollToFn'
            >,
        ): Virtualizer<TScrollElement, TItemElement>
    */
    createEffect(() => {
        console.log(data())
    })

    return (
        <div class="">
            <ProductsGallery data={data().styles} pagination={data()?.metadata} />
            <hr/>
            <Outlet/>
        </div>
    )
}

