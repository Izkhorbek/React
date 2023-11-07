import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const destinationApi = createApi({
  reducerPath: "apidestination",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Destinations"],
  endpoints: (builder) => ({
    //
    //QUERY->get
    //Mutation -> post/put/delete
    getAllDestination: builder.query({
      query: () => "destination",
      providesTags: ["Destinations"],
    }),
    // getAllDestination: builder.query({
    //   query: (id) => `destination/${id}`,
    //   providesTags: (id) => {
    //     return [{ type: ["Destinations"], id: id }];
    //   },
    // }),
    addOneDestination: builder.mutation({
      query: (destination) => ({
        url: "destination",
        method: "POST",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    updateOneDestination: builder.mutation({
      query: (destination) => ({
        url: `destination/${destination.id}`,
        method: "PUT",
        body: destination,
      }),
      invalidatesTags: ["Destinations"],
    }),
    deleteOneDestination: builder.mutation({
      query: ({ id }) => ({
        url: `destination/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Destinations"],
    }),
  }),
});

export const {
  useGetAllDestinationQuery,
  useAddOneDestinationMutation,
  useDeleteOneDestinationMutation,
  useUpdateOneDestinationMutation,
} = destinationApi;
