import Head from "next/head";
import Script from "next/script"
import '../styles/globals.css'
import { useState } from "react";

import GlobalContext from "../util/global-context";

function MyApp({ Component, pageProps }) {

  const [clients, setClients] = useState([
    {
      id: "1",
      name: "client 1",
      website: "client1.com",
      email: "client@1.com"
    },
    {
      id: "2",
      name: "client 2",
      website: "client2.com",
      email: "client@2.com"
    },
    {
      id: "3",
      name: "client 3",
      website: "client3.com",
      email: "client@3.com"
    }
  ]);

  return (
    <>
      <Head>
        {/* Responsive meta tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* bootstrap CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />

        {/* font awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />

      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous" />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous" />

      <GlobalContext.Provider value={[clients, setClients]}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp
