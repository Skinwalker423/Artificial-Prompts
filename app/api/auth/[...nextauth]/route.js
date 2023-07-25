import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  callbacks: {
    session(session, token) {
      return session; // The type here should match the one returned in `useSession()`
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {},
});

export { handler as GET, handler as POST };
