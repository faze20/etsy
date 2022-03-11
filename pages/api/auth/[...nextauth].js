import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"



export default NextAuth({
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
        
        credentials: {
          username: { label: "Fullname", type: "text", placeholder: "Afeez Badmos" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          if(credentials.username ==='Craig' && credentials.password === 'long'){
            const res = await fetch("http://localhost:3000/api/login", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: {
                  'Content-Type': 'application/json',
                  Accept: 'application/json',
                  'User-Agent': '*', 
                },
            })
            const user = await res.json()
            if (res.ok && user){
              return user
            }
          }
          return null

        
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

  })





