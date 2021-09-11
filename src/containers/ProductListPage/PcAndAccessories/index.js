import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.css";
import Card from "./../../../component/UI/Card/index";
import { generatePublicUrl } from "../../../urlConfig";
import NumberFormat from "react-number-format";

/**
 * @author
 * @function PcAndAccessories
 **/

const PcAndAccessories = (props) => {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);

  return (
    <div style={{ padding: "10px" }}>
      <h3 style={{ paddingLeft: "10px", color: "#d7202c" }}>
        {props.match.params.slug}
      </h3>
      <Card className="Card">
        {product.products.map((product) => (
          <div className="caContainer">
            <Link
              className="caImgContainer"
              to={`/${product.slug}/${product._id}/p`}
            >
              <img src={generatePublicUrl(product.productPictures[0].img)} />
              <div className="overlay">
                <div className="img_title">Click để xem chi tiết</div>
                <button className="btn_overlay">Đặt hàng</button>
              </div>
            </Link>
            <div className="caData">
              <div className="caProductName">{product.name}</div>
              <NumberFormat
                value={product.price}
                className="caProductPrice"
                displayType={"text"}
                thousandSeparator={true}
                suffix={" đ"}
                renderText={(value, props) => <div {...props}>{value}</div>}
              />
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default PcAndAccessories;
