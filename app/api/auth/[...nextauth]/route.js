import NextAuth, {
  NextAuthOptions,
  Session,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToMongoDb } from "@utils/database";
import User from "@models/user";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
    async session({ session }) {
      const sessionUser = await User.findOne({
        email: session.user?.email,
      });
      console.log(
        "inside session finding sessionUser",
        sessionUser
      );

      if (!session.user) return session;
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ profile }) {
      try {
        await connectToMongoDb();

        const userExists = await User.findOne({
          email: profile?.email,
        });

        if (!userExists) {
          console.log("user does not exist", profile);
          User.create({
            email: profile?.email,
            username: profile.name
              .replace(" ", "")
              .toLowerCase(),
            image: profile?.picture,
          });
        }

        console.log("user exists", userExists);

        return true;
      } catch (err) {
        console.log("problem signing in", err);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
