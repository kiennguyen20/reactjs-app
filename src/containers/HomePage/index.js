import React from "react";
import ImageSlider from "../../component/Slider/ImageSlider";
import "./style.css";
import Layout from "./../../component/Layout/index";
import { SliderData } from "./../../component/Slider/SliderData";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {
  return (
    <Layout>
      <ImageSlider slides={SliderData} />

      <div>
        <h1 style={{ textAlign: "center", color: "rgb(229, 32, 63)" }}>
          Chính Sách Giao Hàng Các Khu Vực Nội Ngoại Thành{" "}
        </h1>
        <h3 style={{ textAlign: "center" }}>CỦA TP. HỒ CHÍ MINH & HÀ NỘI</h3>
        <div className="boxContainer">
          <div className="box1">
            <h3 className="box1__header">TP. Hồ Chí Minh</h3>
            <h3 className="box1__ladi">
              {" "}
              • Nội thành TP. Hồ Chí Minh:
              <span style={{ fontWeight: "normal" }}>
                {" "}
                Quận 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, Thủ Đức, Tân Phú,
                Tân Bình, Phú Nhuận, Gò Vấp, Bình Thạnh, Bình Tân.{" "}
              </span>
            </h3>
          </div>
          <div className="box1">
            <h3 className="box1__header">Hà Nội</h3>
            <h3 className="box1__ladi">
              {" "}
              • Nội thành Hà Nội:
              <span style={{ fontWeight: "normal" }}>
                Quận Ba Đình, Hoàn Kiếm, Tây Hồ, Long Biên, Cầu Giấy, Đống Đa,
                Hai Bà Trưng, Hoàng Mai, Thanh Xuân, Nam Từ Liêm, Bắc Từ Liêm,
                Hà Đông.
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="location">
        <h1
          style={{
            textAlign: "center",
            color: "rgb(229, 32, 63)",
            marginTop: "10px",
          }}
        >
          Vị Trí Cửa Hàng
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1614942959786!2d106.64525751474918!3d10.798940392306257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175294a0c97a181%3A0x6aece518177f9a92!2sGEARVN!5e0!3m2!1svi!2s!4v1631349778650!5m2!1svi!2s"
          style={{ border: 0, width: "100%", height: "100%" }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </Layout>
  );
};

export default HomePage;
