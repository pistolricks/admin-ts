import { json } from '@tanstack/solid-start'
import { createAPIFileRoute } from '@tanstack/solid-start/api'
import axios from 'redaxios'
import type { User } from '~/utils/users'
import {API_URL, Product, ProductsResponse} from "~/utils/products";




export const APIRoute = createAPIFileRoute('/api/products/$id')({
  GET: async ({ request, params }) => {
    console.info(`Fetching products by style=${params.id}... @`, request.url)
    try {
      const res = await axios.get<ProductsResponse>(
          API_URL + '/v1/products?style=' + params.id,
      )





      return json(res.data)
    } catch (e) {
      console.error(e)
      return json({ error: 'User not found' }, { status: 404 })
    }
  },
})
