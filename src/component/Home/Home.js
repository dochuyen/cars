import React from "react";
import styles from "./Home.module.scss";
import classNames from "classnames/bind";
import { Container, Carousel } from "react-bootstrap";
import bn1 from "../../accets/banner/car1.jpg";
import bn2 from "../../accets/banner/car2.jpg";
import bn3 from "../../accets/banner/car3.jpg";
import ListNewCar from "./component/ListNewCar/ListNewCar";
import Sale from "./component/Sale/Sale";

const cx = classNames.bind(styles);
const Home = () => {
  return (
    <div className={cx("home")}>
      <Carousel className={cx("banner")} fade>
        <Carousel.Item>
          <img
            className={cx("d-block w-100 banner-avt")}
            src={bn1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Ferrari</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={cx("d-block w-100 banner-avt")}
            src={bn2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>GTR</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className={cx("d-block w-100 h-25 banner-avt")}
            style={{ height: "200px" }}
            src={bn3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>BMW</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container>
        <div className={cx("sale")}>
          <Sale/>
        </div>
        
        <div className={cx("new-arrivals")}>
          <h2 className={cx('new-title')}>New arrivals</h2>
          <div className={cx('new-box')}>
            <ListNewCar/>
          </div>

        </div>
        <div className={cx('lucky-game')}>
          lucky game
        </div>

        <div className={cx("evaluate")}>evaluate</div>
      </Container>
    </div>
  );
};

export default Home;
