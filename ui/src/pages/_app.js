import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/layout";
import "../components/layout.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
// import * as gtag from "../lib/gtag"

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
