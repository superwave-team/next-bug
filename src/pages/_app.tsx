import "@/styles/globals.css";

export default function App({ Component, pageProps }: any) {
  const Layout = Component.Layout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getIntialProps = async (appContext: any) => {};
