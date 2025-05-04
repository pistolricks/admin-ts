import {json} from '@tanstack/solid-start'
import {createAPIFileRoute} from '@tanstack/solid-start/api'
import axios from 'redaxios'
import {API_URL, ProductsResponse} from "~/utils/products";


export const APIRoute = createAPIFileRoute('/api/products/$id')({
    GET: async ({request, params}) => {
        console.info(`Fetching products by style=${params.id}... @`, request.url)

        const res = await axios.get<ProductsResponse>(
            API_URL + '/v1/products?style=' + params.id,
        )

        return json({
            products: res?.data?.products,
            metadata: res?.data?.metadata,
        })
    }

})
