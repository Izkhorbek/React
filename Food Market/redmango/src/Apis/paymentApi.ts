import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
    //if we work authentification and authorisathion
    //we add this or pass to APi
    prepareHeaders: (headers: Headers, api) => {
      const token = localStorage.getItem("token");
      token && headers.append("Authorization", "Bearer " + token);
    },
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
