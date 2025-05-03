import {createFileRoute, Link, Outlet} from '@tanstack/solid-router'
import axios from 'redaxios'
import {DEPLOY_URL} from '~/utils/users'
import type {ProductsResponse, StylesResponse} from '~/utils/products'
import {createSignal, For, onMount} from 'solid-js'

export const Route = createFileRoute('/products')({
    loader: async () => {
        return await axios
            .get<ProductsResponse>(DEPLOY_URL + '/api/products')
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



    onMount(() => {
        console.log(data())
    })

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
            <hr/>
            <Outlet/>
        </div>
    )
}

