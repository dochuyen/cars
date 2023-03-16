import React, { useState } from "react";
import styles from "./Log.module.scss";
import classNames from "classnames/bind";
import {
  AiFillYoutube,
  AiOutlineGithub,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const cx = classNames.bind(styles);
const Login = () => {
  const socials = [
    {
      icon: <BsFacebook />,
      src: "https://www.facebook.com/profile.php?id=100040142041736",
    },
    {
      icon: <AiOutlineGithub />,
      src: "https://github.com/chuyenpro?tab=repositories",
    },
    {
      icon: <AiFillYoutube />,
      src: "",
    },
  ];
  const [changelLog, setChangeLog] = useState(true);

  const handleRegister = () => {
    setChangeLog(changelLog === true?false:true);
  };

  return (
    <div className={cx("box")}>
      <div className={cx("wrapper")}>
        {changelLog ? (
          <div className={cx("container")}>
            <div className={cx("login")}>
              <form action="#">
                <h1 className={cx('big-title')}>Login hire.</h1>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <div className={cx("content")}>
                  <div className={cx("checkbox")}>
                    <input type="checkbox" name="checkbox" />
                    <label className={cx("remember")}>Remember me</label>
                  </div>
                  <div className={cx("pass-link")}>
                    <a href="#">Forgot password?</a>
                  </div>
                </div>
                <button className={cx('btn-login')}>Login</button>
                <span className={cx('or')}>or use your account</span>
                <div className={cx("social-box")}>
                  {socials.map((social, index) => (
                    <a key={index} className={cx("social")} href={social.src}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </form>
            </div>

            <div className={cx("overlay-boxlog")}>
              <div className={cx("overlay-log")}>
                <div className={cx("over-right")}>
                  <h1 className={cx("title")}>
                    Start yout <br /> journy now
                  </h1>
                  <p className={cx('text')}>
                    if you don't have an account yet, join us and start your
                    journey.
                  </p>
                  <button className={cx("ghost")} onClick={handleRegister}>
                    Register
                    <AiOutlineArrowRight className={cx("icon-register")} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("container")}>
            <div className={cx("register")}>
              <form action="#">
                <h1 className={cx('big-title')}>Register hire.</h1>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <input type="password" placeholder="Password"></input>
                <button className={cx('btn-register')}>Register</button>
                <span className={cx('or')}>or use your account</span>
                <div className={cx("social-box")}>
                  {socials.map((social, index) => (
                    <a key={index} className={cx("social")} href={social.src}>
                      {social.icon}
                    </a>
                  ))}
                </div>
              </form>
            </div>
            <div className={cx("overlay-boxreg")}>
              <div className={cx("overlay-reg")}>
                <div className={cx("over-left")}>
                  <h1 className={cx("title")}>
                    Hello <br /> friends
                  </h1>
                  <p className={cx('text')}>if Yout have an account, login here and have fun</p>
                  <button onClick={handleRegister} className={cx("ghost")}>
                    Login
                    <AiOutlineArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
