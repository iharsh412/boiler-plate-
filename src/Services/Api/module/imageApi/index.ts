import api from '../../api';

// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   images: string[];
//   category: {
//     id: number;
//     name: string;
//   };
// }

export const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
  overrideExisting: false,
});

export const { useGetProductsQuery } = productApi;
