export * from "./provider";
import type { AuthOptions } from "next-auth";
import { utils } from 'ethers'
import CredentialsProvider from "next-auth/providers/credentials";

const authHost = process.env.NEXT_PUBLIC_API_HOST;

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      session.user.address = token.address;
      session.user.chain = token.chain;

      return session;
    },
    jwt: async ({ token, user, account, trigger, session }) => {
      if (account && trigger === "signIn") {
        token.address = user.address;
        token.chain = user.chain;

        return token;
      }

      return token
    },
  },
  jwt: {
    maxAge: 2 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        address: { label: "Address", type: "text" },
        chain: { label: "Chain", type: "text" },
      },

      async authorize(credentials, req) {
        if (typeof credentials === "undefined") return null

  
        if (utils.getAddress(credentials.address)) {
          return {
            address: credentials.address,
            chain: credentials.chain,
            id: credentials.address,
          }
        } else {
          return null;
        }  
      },
    }),
  ],
  session: { strategy: "jwt", maxAge: 2 * 60 * 60 },
};
