import React from "react";
import Header from "./Header/header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/footer";
import Home from "./Home/home";
function Layout({ children }) {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default Layout;
