import { Provider } from "next-auth/client";
import Layout from "../components/Layout";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-free/js/brands";

config.autoAddCss = false;

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
