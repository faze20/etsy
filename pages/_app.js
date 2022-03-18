import { Provider } from 'react-redux'; 
import { SessionProvider } from "next-auth/react"
import store from '../redux/store';    
import Layout from '../components/Layout'
import { CookiesProvider } from "react-cookie"
import '../styles/globals.css'


export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Provider>
  )
}