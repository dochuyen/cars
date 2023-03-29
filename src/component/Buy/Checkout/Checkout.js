import React from "react";
import styles from "./Checkout.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { AiOutlineRight } from "react-icons/ai";

const cx = classNames.bind(styles);
const Checkout = () => {
  return (
    <div className={cx("wapper")}>
      <div className={cx("toolbar")}>
        <Container>
          <h3 className={cx("toolbar-title")}>Checkout</h3>
          <div className={cx("directional")}>
            <div>
              Home <AiOutlineRight className={cx("icon-tool")} />
            </div>
            <div>
              Buy <AiOutlineRight className={cx("icon-tool")} />
            </div>
            <div className={cx("end")}>Checkout</div>
          </div>
        </Container>
      </div>
      <Container>
        <div className={cx("content")}>
          <div className={cx("info-user")}>
            <form>
              <div className={cx("title-form")}>Customer information</div>
              <div className={cx("name")}>
                <div className={cx("checkout-name")}>
                  <p>
                    Fist Name
                    <span>*</span>
                  </p>
                  <input type="text" name="fist-name" />
                </div>
                <div className={cx("checkout-name")}>
                  <p>
                    Last Name
                    <span>*</span>
                  </p>
                  <input type="text" name="last-name" />
                </div>
              </div>
              <div className={cx("address")}>
                <div className={cx("checkout-input")}>
                  <p>
                    Address
                    <span>*</span>
                  </p>
                  <input type="text" name="last-name" />
                </div>
                <div className={cx("checkout-input")}>
                  <p>
                    Town/City
                    <span>*</span>
                  </p>
                  <input type="text" name="last-name" />
                </div>
                <div className={cx("checkout-input")}>
                  <p>
                    Country
                    <span>*</span>
                  </p>
                  <input type="text" name="last-name" />
                </div>
              </div>
              <div className={cx("name")}>
                <div className={cx("checkout-name")}>
                  <p>
                    Phone
                    <span>*</span>
                  </p>
                  <input type="text" name="fist-name" />
                </div>
                <div className={cx("checkout-name")}>
                  <p>
                    Email
                    <span>*</span>
                  </p>
                  <input type="text" name="last-name" />
                </div>
              </div>
              <div className={cx("checkout-input")}>
                <p>
                  Order notes (option)
                </p>
                <input type="text" name="last-name" />
              </div>
            </form>
          </div>

          <div className={cx("bill")}>
            <h4 className={cx('bill-title')}>Your order</h4>
            <div className={cx("bill-order")}>
              <div className={cx("name-product")}>
                <p>Product</p>
                <ul>
                  <li>Lamborgini</li>
                </ul>
              </div>
              <div className={cx("price")}>
                <p>Price</p>
                <span>$10000</span>
              </div>
            </div>
            <div className={cx("total")}>
              <p>Total</p>
              <p className={cx('total-child')}>0</p>
            </div>
            <div className={cx("check")}>
              <input type="checkbox" name="" value="" />
              Pay on receipt
            </div>
            <div className={cx("check")}>
              <input type="checkbox" name="" value="" />
              <span>Paypal</span>
            </div>
            <button className={cx('btn-submit')}>PLACE ORDER</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
