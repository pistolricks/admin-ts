import {createFileRoute, Link, Outlet} from '@tanstack/solid-router'
import axios from 'redaxios'
import type {Product, ProductsResponse} from '~/utils/products'
import { DEPLOY_URL } from '~/utils/products'
import { NotFound } from '~/components/NotFound'

import {ProductErrorComponent} from "~/components/ProductError";
import {createEffect, For, onMount, Show} from "solid-js";
import ProductView from "~/components/ui/sections/products/product-view";

export const Route = createFileRoute('/apparel/$productId')({
    loader: async ({ params: { productId } }) => {
        return await axios
            .get<ProductsResponse>(DEPLOY_URL + '/api/apparel/' + productId)
            .then((r) => r.data)
            .catch(() => {
                throw new Error('Failed to fetch product')
            })
    },
    errorComponent: ProductErrorComponent,
    component: View,
    notFoundComponent: () => {
        return <NotFound>User not found</NotFound>
    },
})

function View() {
    const data = Route.useLoaderData()

    createEffect(() => {
        console.log(data())
    })

    return (
        <div class="w-full h-full">
            <ProductView products={data()?.products}/>
            <hr />

        </div>
    )
}
