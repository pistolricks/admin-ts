import {createFileRoute, Link, Outlet} from '@tanstack/solid-router'
import axios from 'redaxios'
import type {Product, ProductsResponse} from '~/utils/products'
import { DEPLOY_URL } from '~/utils/products'
import { NotFound } from '~/components/NotFound'

import {ProductErrorComponent} from "~/components/ProductError";

export const Route = createFileRoute('/products/$productId')({
    loader: async ({ params: { productId } }) => {
        return await axios
            .get<ProductsResponse>(DEPLOY_URL + '/api/products/' + productId)
            .then((r) => r.data)
            .catch(() => {
                throw new Error('Failed to fetch product')
            })
    },
    errorComponent: ProductErrorComponent,
    component: ProductComponent,
    notFoundComponent: () => {
        return <NotFound>User not found</NotFound>
    },
})

function ProductComponent() {
    const data = Route.useLoaderData()

    return (
        <div class="p-2 flex gap-2">
            <ul class="list-disc pl-4">
                {[
                    ...data()?.products,
                    {id: 0, product_title: 'Non-existent product', product_description: '', style: '', available_sizes: '', brand_logo_image: '', thumbnail_image: '', color_swatch_image: '', product_image: '', spec_sheet: '', price_text: '', suggested_price: '', category_name: '', subcategory_name: '', color_name: '', color_square_image: '', color_product_image: '', color_product_image_thumbnail: '', size: '', piece_weight: '', piece_price: '', dozens_price: '', case_price: '', price_group: '', case_size: '', inventory_key: '', size_index: '', sanmar_mainframe_color: '', mill: '', product_status: '', companion_style: '', msrp: '', map_pricing: '', front_model_image_url: '', back_model_image_url: '', front_flat_image_url: '', back_flat_image_url: '', product_measurements: '', pms_color: '', gtin: '', decoration_spec_sheet: ''},
                ].map((product) => {
                    return (
                        <li class="whitespace-nowrap">

                                <div>{product.product_title}</div>
                                <div>{product.color_name}</div>

                        </li>
                    )
                })}
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
