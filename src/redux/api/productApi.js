import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: 'product',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/v1/'}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => `products`,
            providesTags: ['products']
        }),
        

    }),
    
});

export const { useGetAllProductsQuery } = productApi;
