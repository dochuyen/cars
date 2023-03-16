import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Login from "../offpage/Login";
import classNames from "classnames/bind";
import styles from './Layout.module.scss'

const cx=classNames.bind(styles)
const Layout = ({ children }) => {
  return (
    <>
      <div className={cx("header")}>
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
};
export default Layout;
