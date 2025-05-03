import {json} from '@tanstack/solid-start'
import {createAPIFileRoute} from '@tanstack/solid-start/api'
import axios from 'redaxios'
import {API_URL, StylesResponse} from "~/utils/products";

export const APIRoute = createAPIFileRoute('/api/products')({
    GET: async ({request}) => {
        console.info('Fetching styles... @', request.url)
        const res = await axios.get<StylesResponse>(
            API_URL + '/v1/styles',
        )

        return json({
            styles: res.data.styles,
            metadata: res.data.metadata,
        })
    },
})
