import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
    //baseUrl: "https://localhost:7181/api/",
  }),
  endpoints: (builder) => ({
    // GET: https://redmangoapi.azurewebsites.net/api/payment
    initialPayment: builder.mutation({
      query: (userId) => ({
        url: "payment",
        method: "POST",
        params: {
          userId: userId,
        },
      }),
    }),
  }),
});

export const { useInitialPaymentMutation } = paymentApi;
export default paymentApi;
