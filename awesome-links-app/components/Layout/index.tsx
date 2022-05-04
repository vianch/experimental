import React, { ReactElement } from "react";
import Header from "./Header";

type LayoutProps = {
  children: ReactElement;
};
const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
