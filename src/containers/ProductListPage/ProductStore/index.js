import React, { useEffect, useState } from "react";
import { getProductsBySlug } from "../../../actions";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { generatePublicUrl } from "../../../urlConfig";
import { Link } from "react-router-dom";
import Card from "./../../../component/UI/Card/index";
import NumberFormat from "react-number-format";

/**
/**
* @author
* @function ProductStore
**/

const ProductStore = (props) => {
  const product = useSelector((state) => state.product);
  const priceRange = product.priceRange;
  const dispatch = useDispatch();
  useEffect(() => {
    const { match } = props;
    dispatch(getProductsBySlug(match.params.slug));
  }, []);
  return (
    <>
      {Object.keys(product.productsByPrice).map((key, index) => {
        return (
          <Card
            headerLeft={`${props.match.params.slug} dưới ${priceRange[key]}`}
            style={{
              width: "calc(100% - 40px)",
              margin: "20px",
            }}
          >
            <div className="Container" style={{ marginTop: "20px" }}>
              {product.productsByPrice[key].map((product) => (
                <Link
                  to={`/${product.slug}/${product._id}/p`}
                  className="productContainer"
                >
                  <div className="productImgContainer">
                    <img
                      src={generatePublicUrl(product.productPictures[0].img)}
                      alt=""
                    />
                  </div>
                  <div className="productInfo">
                    <div style={{ margin: "5px" }}>{product.name}</div>

                    <NumberFormat
                      value={product.price}
                      className="productPrice"
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={" đ"}
                      renderText={(value, props) => (
                        <div {...props}>{value}</div>
                      )}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </Card>
        );
      })}
    </>
  );
};
export default ProductStore;
