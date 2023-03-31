import React from "react";
import styles from './Lucky.module.scss'
import classNames from "classnames/bind";
import keycar from '../../../../accets/lucky/key-car.png'

const cx=classNames.bind(styles)
const Lucky = () => {
  return (
    <div className={cx('wrapper')}>
      <h2>Lucky Game </h2>
    </div>
  );
};

export default Lucky;
