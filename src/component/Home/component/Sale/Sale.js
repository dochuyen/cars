import React from "react";
import styles from "./Sale.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const Sale = () => {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Bestseller</h2>
      <section className={cx("hero-section")}>
        <div className={cx("card-container")}>
          <div className={cx("card")}>
            <div className={cx("card-background")}></div>
            <div className={cx("content")}>
              <div className={cx('card-category')}>
                BMW
              </div>
              {/* <h3 className="card-heading">No plan for today</h3> */}
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("card-background")}></div>
            <div className={cx("content")}>
              <div className={cx('card-category')}>
                over size
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;
