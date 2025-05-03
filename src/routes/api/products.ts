import {json} from '@tanstack/solid-start'
import {createAPIFileRoute} from '@tanstack/solid-start/api'
import axios from 'redaxios'
import {API_URL, ProductsResponse, StylesResponse} from "~/utils/products";

export const APIRoute = createAPIFileRoute('/api/products')({
    GET: async ({request}) => {
        console.info('Fetching styles... @', request.url)
        const res = await axios.get<ProductsResponse>(
           // API_URL + '/v1/styles',
            API_URL + '/v1/products',
        )

        return json({
            products: res.data.products,
            metadata: res.data.metadata,
        })
    },
})
