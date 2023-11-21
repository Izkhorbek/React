import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const menuItemApi = createApi({
  reducerPath: "menuItemApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://redmangoapi.azurewebsites.net/api/",
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
  }),
});

export const { useGetMenuItemsQuery, useGetMenuItembyIdQuery } = menuItemApi;
export default menuItemApi;
