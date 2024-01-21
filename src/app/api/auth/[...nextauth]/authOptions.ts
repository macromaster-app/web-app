import GoogleProvider from "next-auth/providers/google";
import { DefaultSession, Session } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { JWT } from "next-auth/jwt";
import { Account } from "next-auth";
import prisma from "@/server/db/prisma";
import { SessionStrategy } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      provider?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    provider?: string;
  }
}

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: { signIn: "/signin" },
  session: {
    strategy: "jwt" as SessionStrategy,
    maxAge: 60 * 30,
  },
  callbacks: {
    async jwt({ token, account }: { token: JWT; account: Account }) {
      if (account) {
        token.provider = account.provider;
        return token;
      }
      return token;
    },

    async session({
      session,
      token,
      user,
    }: {
      session: Session;
      token: JWT;
      user: any;
    }) {
      session.user.provider = token.provider;

      return session;
    },
  },
};
