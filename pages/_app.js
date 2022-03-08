import { CookiesProvider } from "react-cookie"
import { SessionProvider } from "next-auth/react"
import Layout from '../components/Layout'
import '../styles/globals.css'


// const MyApp = ({ Component , pageProps}) => (
//   <CookiesProvider>
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   </CookiesProvider>
// )
// export default MyApp

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}