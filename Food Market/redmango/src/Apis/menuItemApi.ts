import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Header } from "../Components/Layout";

const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
    //if we work authentification and authorisathion
    //we add this or pass to APi
    prepareHeaders: (headers: Headers, api) => {
      const token = localStorage.getItem("token");
      token && headers.append("Authorization", "Bearer " + token);
    },
  }),
  tagTypes: ["MenuItems"],
  endpoints: (builder) => ({
    // GET: https://redmangoapi.azurewebsites.net/api/menuitem
    getMenuItems: builder.query({
      query: () => ({
        url: "menuitem",
      }),
      providesTags: ["MenuItems"],
    }),

    //GET: https://redmangoapi.azurewebsites.net/api/menuitem/id
    getMenuItembyId: builder.query({
      query: (id) => ({
        url: `menuitem/${id}`,
      }),
      providesTags: ["MenuItems"],
    }),
    //PUT: https://redmangoapi.azurewebsites.net/api/menuitem/id
    updateMenuItem: builder.mutation({
      query: ({ itemDetails, id }) => ({
        url: `menuitem/${id}`,
        method: "PUT",
        body: itemDetails,
      }),
      invalidatesTags: ["MenuItems"],
    }),
    //Post: https://redmangoapi.azurewebsites.net/api/menuitem/id
    createMenuItem: builder.mutation({
      query: (itemDetails) => ({
        url: "menuitem",
        method: "POST",
        body: itemDetails,
      }),
      invalidatesTags: ["MenuItems"],
    }),
    //Delete: https://redmangoapi.azurewebsites.net/api/menuitem/id
    deteleMenuItembyId: builder.mutation({
      query: (id) => ({
        url: `menuitem/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["MenuItems"],
    }),
  }),
});

export const {
  useCreateMenuItemMutation,
  useGetMenuItemsQuery,
  useGetMenuItembyIdQuery,
  useUpdateMenuItemMutation,
  useDeteleMenuItembyIdMutation,
} = menuItemApi;
export default menuItemApi;
