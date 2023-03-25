import React from "react";
import classNames from "classnames/bind";
import styles from "./Trend.module.scss";
import { AiOutlineCalendar } from "react-icons/ai";

const cx = classNames.bind(styles);
const Trend = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h5 className={cx("small-title")}>LATEST NEWS</h5>
        <h2 className={cx("big-title")}>New Trends</h2>
      </div>
      <div className={cx('box')}>
          <div className={cx('content')}>
              <div className={cx("gif")}></div>
              <div className={cx("type")}>
                <p className={cx("calendar")}>
                  <AiOutlineCalendar  className={cx('icon-calendar')}/>
                  24/03/2023
                </p>
                <p className={cx("title-ctt")}>Ferrari</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Trend;
