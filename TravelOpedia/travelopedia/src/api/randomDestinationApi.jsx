import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const randomDestinationApi = createApi({
  reducerPath: "apirandomdestination",
  baseQuery: fetchBaseQuery({ baseUrl: "https://random-data-api.com/api/v2/" }),
  endpoints: (builder) => ({
    //
    //QUERY->get
    //Mutation -> post/put/delete
    getRandomDestination: builder.query({
      query: () => ({
        url: "addresses",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRandomDestinationQuery } = randomDestinationApi;
