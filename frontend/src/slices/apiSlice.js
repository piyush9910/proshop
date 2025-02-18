import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['Product', 'User', 'Order', 'Paypal'],
  endpoints: (builder) => ({
    //     // Product Endpoints
    //     getProducts: builder.query({
    //         query: () => '/api/products',
    //         providesTags: ['Product']
    //     }),
    //     getProductById: builder.query({
    //         query: (id) => `/api/products/${id}`,
    //         providesTags: ['Product']
    //     }),
    //     // User Endpoints
    //     getUserProfile: builder.query({
    //         query: () => '/api/users/profile',
    //         providesTags: ['User']
    //     }),
    //     updateUserProfile: builder.mutation({
    //         query: (userData) => ({
    //             url: '/api/users/profile',
    //             method: 'PUT',
    //             body: userData
    //         }),
    //         invalidatesTags: ['User']
    //     }),
    //     // Order Endpoints
    //     createOrder: builder.mutation({
    //         query: (orderData) => ({
    //             url: '/api/orders',
    //             method: 'POST',
    //             body: orderData
    //         }),
    //         invalidatesTags: ['Order']
    //     }),
    //     getOrderById: builder.query({
    //         query: (id) => `/api/orders/${id}`,
    //         providesTags: ['Order']
    //     }),
    //     // Paypal Endpoints
    //     getPaypalClientId: builder.query({
    //         query: () => '/api/config/paypal',
    //         providesTags: ['Paypal']
    //     })
  }),
});
