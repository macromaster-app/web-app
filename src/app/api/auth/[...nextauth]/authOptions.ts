import GoogleProvider from "next-auth/providers/google";
import { DefaultSession, Session } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { JWT } from "next-auth/jwt";
import { Account } from "next-auth";
import prisma from "@/server/db/prisma";
import { SessionStrategy } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import bcrypt from "bcrypt";
//

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
    CredentialsProvider({
      id: "signin",
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        //check if user exists
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (!user) return null;

        if (!user.password) return null;
        //check if password matches bcrypt compare
        const passwordMatches = bcrypt.compare(
          credentials!.password,
          user!.password!
        );

        return user;
      },
    }),
    CredentialsProvider({
      id: "register",
      name: "Registerr",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text", placeholder: "John Smith" },
      },
      async authorize(credentials, req) {
        // find if thus email is already registered
        console.log("credentials", credentials);
        const user = await prisma.user.findUnique({
          where: { email: credentials?.email },
        });

        if (user) return null;

        console.log("creating new user", credentials);

        const saltRounds = 10;
        const hash = await bcrypt.hash(credentials!.password, saltRounds);

        const newUser = await prisma.user.create({
          data: {
            email: credentials?.email,
            name: credentials?.name,
            password: hash,
          },
        });
        console.log(newUser);

        if (newUser) {
          // Any object returned will be saved in `user` property of the JWT
          return newUser;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;
        }
      },
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
