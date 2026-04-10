import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IData, IResponse } from "../types/types";
import build from "next/dist/build";

export const TodoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://37.27.29.18:8001" }),
  endpoints: (build) => ({
    getTodos: build.query<IResponse, null>({
      query: () => `/api/to-dos`,
    }),
    deleteTodos: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/to-dos?id=${id}`,
        method: "DELETE",
      }),
    }),
    deleteTodosImg: build.mutation<any, number>({
      query: (id) => ({
        url: `/api/to-dos/images/${id}`,
        method: "DELETE",
      }),
    }),
    addTodos: build.mutation<any, FormData>({
      query: (data) => ({
        url: `/api/to-dos`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddTodosMutation,
  useGetTodosQuery,
  useDeleteTodosMutation,
  useDeleteTodosImgMutation,
} = TodoApi;
