import {createFileRoute, Link, Outlet} from '@tanstack/solid-router'
import axios from 'redaxios'
import type {Product, ProductsResponse} from '~/utils/products'
import { DEPLOY_URL } from '~/utils/products'
import { NotFound } from '~/components/NotFound'

import {ProductErrorComponent} from "~/components/ProductError";
import {For} from "solid-js";

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
                <For each={data().products}>
                    {(product) => {
                        return (
                            <li class="whitespace-nowrap">
                                <Link
                                    to={"/products/$productId"}
                                    params={{
                                        productId: product.Attrs.style,
                                    }}

                                    class="block py-1 text-blue-800 hover:text-blue-600"

                                >
                                    <div>{product.Attrs.product_title}</div>
                                    <div>{product.Attrs.color_name}</div>
                                </Link>
                            </li>
                        )
                    }}
                </For>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
