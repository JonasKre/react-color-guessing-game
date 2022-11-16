import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl w-full m-auto px-3">{children}</div>;
}

export default Container;
