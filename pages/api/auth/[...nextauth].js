import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"


export default NextAuth({
    // Configure one or more authentication providers
    providers: [
      GithubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET,
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "john smith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          if(credentials.username ==="afeez20" && credentials.password === "long" ){
            return { id: 1, name: 'korde Smith', email: 'koredebello@example.com' }
          }
          return null
          //   return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }


          // } else{
          //   return {message: 'not validated'}
          // }
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          // const res = await fetch("/api/login", {
          //   method: 'POST',
          //   body: JSON.stringify(credentials),
          //   headers: { "Content-Type": "application/json" }
          // })
          // const user = await res.json()
    
          // If no error and we have user data, return it
          // if (res.ok && user) {
          //   return user
          // }
          // Return null if user data could not be retrieved
          // return null
        }
      }),
      // ...add more providers here
    ],
    callbacks:{
      jwt: ({token , user }) => {
        if(user) {
          token.id = user.id
        }
        return token
      },
      session:  ({session , token }) => {
        if(token) {
          session.id = token.id
        }
        return session
      }
    },
    secret: "test",
    jwt:{
      secret: "test",
      encryption: true,
    }

    // adapter: MongoDBAdapter(clientPromise),
  })





// const options = {
//     providers: [
//         Providers.GitHub({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.GITHUB_SECRET
//         }),
//     ],
// }

// export default (req, res) => NextAuth(req, res, options)