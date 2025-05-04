import {createFileRoute, Link, Outlet} from '@tanstack/solid-router'
import axios from 'redaxios'
import type {Product, ProductsResponse} from '~/utils/products'
import { DEPLOY_URL } from '~/utils/products'
import { NotFound } from '~/components/NotFound'

import {ProductErrorComponent} from "~/components/ProductError";
import {createEffect, For, onMount, Show} from "solid-js";

export const Route = createFileRoute('/apparel/$productId')({
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

    createEffect(() => {
        console.log(data())
    })

    return (
        <div class="p-2 flex gap-2">
            <ul class="list-disc pl-4">
                <Show when={data()?.products}>
                <For each={data()?.products}>
                    {(product) => {
                        return (
                            <li class="whitespace-nowrap">

                                    <div>{product.product_title}</div>
                                    <div>{product.color_name}</div>
                            </li>
                        )
                    }}
                </For>
                </Show>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
