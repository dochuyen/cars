import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/index";
import Container from "react-bootstrap/esm/Container";
import Home from "./component/Home/Home";
import Shop from "./component/Shop/Shop";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import Checkout from "./component/Buy/Checkout/Checkout";
import Shopcart from "./component/Buy/ShopCart/Shopcart";
import Shopdetail from "./component/Buy/Shopdetail/Shopdetail";
import Login from "./offpage/Login";

const App = () => {
  const publics = [
    {
      path: "/",
      component: Home ,
    },
    {
      path: "/shop",
      component: Shop ,
    },
    {
      path: "/blog",
      component: Blog ,
    },
    {
      path: "/contact",
      component: Contact ,
    },
    {
      path: "/about",
      component: About ,
    },
    {
      path: "/checkout",
      component: Checkout ,
    },
    {
      path: "/shopcart",
      component: Shopcart ,
    },
    {
      path: "/shopdetail",
      component: Shopdetail ,
    },
  ];
  return (
    <div>
      <Routes>
        {publics.map((pub, index) => {
          const Pages = pub.component;
          return (
            <Route
              key={index}
              path={pub.path}
              element={
                <>
                  <Layout>
                    <Pages />
                  </Layout>
                </>
              }
            />
          );
        })}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
