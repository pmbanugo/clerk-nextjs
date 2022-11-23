import { ClerkProvider } from "@clerk/nextjs";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
  // return <Component {...pageProps} />;
}

export default MyApp;
