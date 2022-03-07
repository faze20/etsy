import { CookiesProvider } from "react-cookie"
import Layout from '../components/Layout'
import '../styles/globals.css'


const MyApp = ({ Component , pageProps}) => (
  <CookiesProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </CookiesProvider>
)
export default MyApp
