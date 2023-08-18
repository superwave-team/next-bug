import "@/styles/globals.css";
import React from "react";

function App({ Component, rand }: any) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const renderId = React.useMemo(() => rand, []);
  return (
    <div>
      <span>Unique ID of render: {renderId}</span>
      <Component />
    </div>
  );
}

App.getInitialProps = async (appContext: any) => {
  return {
    rand: appContext.ctx.req && Math.random(),
  };
};

export default App;
