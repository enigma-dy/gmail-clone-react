import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gmailApi = createApi({
  reducerPath: "gmailApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4002/api/v1/" }),
  endpoints: (builder) => ({
    getAllMails: builder.query({
      query: () => "email/mails",
    }),

    getMailById: builder.query({
      query: (id) => `email/mails/${id}`,
    }),

    sendMail: builder.mutation({
      query: (emailData) => ({
        url: "email/send",
        method: "POST",
        body: emailData,
      }),
    }),
  }),
});

export const { useGetAllMailsQuery, useGetMailByIdQuery, useSendMailMutation } =
  gmailApi;
