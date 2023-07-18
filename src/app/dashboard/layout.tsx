import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Menu from "@components/menu/Menu";
import React, { ReactNode } from "react";
import "@styles/dashboard.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard__container">
        <div className="dashboard__menu">
          <Menu />
        </div>
        <div className="dashboard__content"> {children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
