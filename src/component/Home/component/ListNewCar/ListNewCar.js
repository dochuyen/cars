import React from "react";
import { Carousel, Col, Row, Card, Button } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./List.module.scss";
import {IoIosAddCircle} from 'react-icons/io'
import {AiFillStar} from 'react-icons/ai'

const cx = classNames.bind(styles);
const ListNewCar = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx('box')}>
        <div className={cx("img-car")}>
          <img className={cx('picture')} src="https://tse2.mm.bing.net/th?id=OIP.jP1affsIOeZfzgBUNECqrAHaE7&pid=Api&P=0" />
        </div>
        <div className={cx('car')}>
          <strong className={cx('name-car')}>GTR</strong>
          <div className={cx('price-car')}>
            $15,730*
          </div>
          <button className={cx('star')}>
            <AiFillStar className={cx('icon-star')}/>
          </button>
          <button className={cx('add')}>
            <IoIosAddCircle/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListNewCar;
