import React from "react";

export const MyLayout = ({ children, ...props }: any) => {
  const { rand } = React.useMemo(() => {
    return {
      rand: Math.random(),
    };
  }, []);
  React.useEffect(() => {
    console.log("Rand:", rand);
  }, [rand]);

  return <div>{children}</div>;
};
