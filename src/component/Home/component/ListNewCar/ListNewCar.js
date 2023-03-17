import React from "react";
import { Carousel, Col, Row, Card, Button } from "react-bootstrap";
import styles from "./ListNewCar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const ListNewCar = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('')}>
        <div className={cx("img-car")}>
          <img src="https://tse2.mm.bing.net/th?id=OIP.jP1affsIOeZfzgBUNECqrAHaE7&pid=Api&P=0" />
        </div>
        <div className={cx('car')}>
          <strong className={cx('name-car')}>GTR</strong>
          <div className={cx('price-car')}>
            $15,730*
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListNewCar;
