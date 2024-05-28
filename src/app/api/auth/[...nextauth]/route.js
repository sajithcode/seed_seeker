import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import mongoose from "mongoose";
import {User} from '@/app/models/User';
import bcrypt from 'bcrypt';
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/libs/mongoConnect";

const handler = NextAuth({
    secret: process.env.SECRET,
    adapter: MongoDBAdapter(clientPromise),
    providers: [
     /* GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }), */
  CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    type: 'credentials',
    id: 'credentials',
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      email: {label: "Email", type: "text", placeholder: ""},
      password: { label: "Password", type: "password" },
      role: {label: "Role", type: "text", placeholder: ""}
    },
    async authorize(credentials, req) {

      const email = credentials?.email;
      const password = credentials?.password;

      await mongoose.connect(process.env.MONGO_URL);
      const user = await User.findOne({email: email});
      const passwordOk = user &&  bcrypt.compareSync(password, user.password);

      console.log({passwordOk});

      if (passwordOk) {
        return user;
      }

      return null
    }
  })
]
})

export { handler as GET, handler as POST }