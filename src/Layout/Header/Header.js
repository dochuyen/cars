import { Container, Form, Nav, Navbar, Offcanvas } from "react-bootstrap";
import logo from "../../accets/logo/logo.png";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

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
      to: "/contact",
      type: "Contact",
      text: false,
    },
  ];

  const offpage = [
    {
      type: "Login",
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
    <div className={cx("container")}>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          variant="dark"
          className={cx("wrapper")}
          style={{
            top: "0",
            position: "fixed",
            zIndex: "100",
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
                        item.type === "Buy"
                          ? setShowBuy(true)
                          : setShowBuy(false)
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
                <Link to="/login" className={cx("btn-log")}>
                  Login
                </Link>
                <div className={cx("nav")}>
                  <Link to='/shopcart' style={{ position: "relative", cursor: "pointer" }}>
                    <AiOutlineShoppingCart className={cx("icon-nav")} />
                    <div className={cx("child-icon")}>3</div>
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
