import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import logo from "../../accets/logo/logo.png";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import About from "../../component/About/About";
import Blog from "../../component/Blog/Blog";
import Shop from "../../component/Shop/Shop";
import Contact from "../../component/Contact/Contact";
import Home from "../../component/Home/Home";
import Checkout from "../../component/Buy/Checkout/Checkout";
import ShopCart from "../../component/Buy/ShopCart/Shopcart";
import ShopDetail from "../../component/Buy/Shopdetail/Shopdetail";
import { Children, useState, useRef } from "react";

const cx = classNames.bind(styles);
function Header() {
  const items = [
    {
      id: 1,
      to: "/",
      type: "Home",
      text: false,
    },
    {
      id: 2,
      to: "/shop",
      type: "Shop",
      text: false,
    },
    {
      id: 3,
      to: "/checkout",
      type: "Buy",
      text: true,
      children: [
        {
          to: "/shopdetail",
          type: "Shop detail",
        },
        {
          to: "/shopcart",
          type: "Shop cart",
        },
        {
          to: "/checkout",
          type: "Check out",
        },
      ],
    },
    {
      id: 4,
      to: "/blog",
      type: "Blog",
      text: false,
    },
    {
      id: 5,
      to: "/about",
      type: "About",
      text: false,
    },
    {
      id: 6,
      to: "/contact",
      type: "Contact",
      text: false,
    },
  ];

  const [types, setTypes] = useState("Home");
  const [showBuy, setShowBuy] = useState(false);
  const timeoutRef = useRef(null);
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowBuy(false);
    }, 2000);
  };
  return (
    <div className="">
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          className={cx("wrapper")}
          style={{
            top: "0",
            position: "fixed",
            zIndex: "2",
            width: "100%",
            
          }}
        >
          <Container>
            <Link to="/" className={cx("logo")}>
              <img className={cx("logo-avt")} src={logo} />
            </Link>
            <Link to="/" className={cx("title")}>
              SuperDrive
            </Link>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ backgroundColor: "#333" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ color: "#f5f5f5" }}
                >
                  SuperDrive
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {items.map((item) => (
                    <Link
                      key={item.id}
                      to={item.to}
                      className={cx("item")}
                      style={
                        types === item.type
                          ? {
                              borderBottom: "2px solid #ff9950",
                              borderRadius: "3px",
                              color: "#ff9950",
                            }
                          : {}
                      }
                      onClick={() => {
                        setTypes(item.type);
                      }}
                      onMouseEnter={() =>
                        item.type === "Buy" ? setShowBuy(true) : null
                      }
                      onMouseLeave={() =>
                        item.children ? handleMouseLeave : null
                      }
                    >
                      {item.type}
                      {item.children && showBuy && (
                        <div
                          className={cx("list-buy")}
                          onMouseLeave={() =>
                            item.type === "Buy" ? setShowBuy(false) : null
                          }
                        >
                          {item.children.map((child, index) => (
                            <Link
                              className={cx("buy-item")}
                              to={child.to}
                              key={index}
                            >
                              {child.type}
                            </Link>
                          ))}
                        </div>
                      )}
                    </Link>
                  ))}
                </Nav>

                <div className={cx("nav-search")}>
                  <input className={cx("search")} type="search" />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shopcart" element={<ShopCart />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
      </Routes>
    </div>
  );
}

export default Header;
