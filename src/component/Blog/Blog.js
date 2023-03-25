import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import classNames from "classnames/bind";
import styles from "./Blog.module.scss";

const cx = classNames.bind(styles);
const Blog = () => {
  const cardData = [
    {
      id: 1,
      img: "https://znews-photo.zingcdn.me/w660/Uploaded/ebhuiwh/2022_02_10/2022_Koenigsegg_Expansion_Announcement_1.jpg",
    },
    {
      id: 2,
      img: "https://media.auto5.vn/files/hoanghai98/2021/03/20/mc%207-095647.jpeg",
    },
    {
      id: 3,
      img: "https://cafefcdn.com/203337114487263232/2022/12/9/photo-24-16705931840871741252566.jpg",
    },

    {
      id: 4,
      img: "https://cdn.baogiaothong.vn/upload/images/2020-2/album_img/2020-04-25/nguoi-dep-porsche-911-1-1587757294-width1004height565.jpg",
    },
    {
      id: 5,
      img: "https://autopro8.mediacdn.vn/2020/5/6/11-15887664230931119062938.jpg",
    },

    {
      id: 6,
      img: "https://fptshop.com.vn/Uploads/images/1(270).jpg",
    },
    {
      id: 7,
      img: "https://danviet.mediacdn.vn/upload/1-2017/images/2017-03-15/148953874025088-2.jpg",
    },
    {
      id: 8,
      img: "http://anhnendep.net/wp-content/uploads/2016/02/nguoi-dep-va-sieu-xe-15-683x1024.jpg",
    },
    {
      id: 9,
      img: "https://danchoioto.vn/wp-content/uploads/2020/05/xe-mo-hinh-bang-bang-nhua-silicone-hoac-cao-su-duoc-goi-la-dong-xe-resin.jpg",
    },
  ];
  return (
    <>
      <img
        src="https://thienthanhlimo.com/wp-content/uploads/2022/05/101-anh-sieu-xe-4k-tai-free-lam-hinh-nen-dt-may-tinh.jpg"
        alt=""
        width="100%"
        className={cx("img-nav")}
      />
      <Container>
        <Row xs={2} md={3} lg={4} className="g-4"></Row>
        <Row></Row>
      </Container>
    </>
  );
};

export default Blog;
