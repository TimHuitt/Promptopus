import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/Google'

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
}

export default NextAuth(options)