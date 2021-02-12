import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(Component);
  //console.log(pageProps);
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
