import "../styles/globals.css";
import Layout from "../components/Layout";
import { Provider } from "next-auth/client";
import "@fortawesome/fontawesome-free/js/brands";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { DrawerContextProvider } from "../context/drawerContext";

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <DrawerContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DrawerContextProvider>
    </Provider>
  );
}

export default MyApp;
