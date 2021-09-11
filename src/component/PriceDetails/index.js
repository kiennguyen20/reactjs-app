import React from "react";
import Card from "./../UI/Card/index";
import NumberFormat from "react-number-format";

/**
 * @author
 * @function PriceDetails
 **/

const PriceDetails = (props) => {
  return (
    <Card headerLeft={"Chi Tiết Hóa Đơn"} style={{ maxWidth: "380px" }}>
      <div
        style={{
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <div
          className="flexRow sb"
          style={{ margin: "10px 0", justifyContent: "space-between" }}
        >
          <div>Giá tiền ({props.totalItem} sản phẩm): </div>
          <NumberFormat
            value={props.totalPrice}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" đ"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </div>
        <div
          className="flexRow sb"
          style={{ margin: "10px 0", justifyContent: "space-between" }}
        >
          <div>Phí vận chuyển:</div>
          <div>FREE</div>
        </div>
        <div
          className="flexRow sb"
          style={{ margin: "10px 0", justifyContent: "space-between" }}
        >
          <div>Tổng tiền:</div>
          <NumberFormat
            value={props.totalPrice}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" đ"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </div>
      </div>
    </Card>
  );
};

export default PriceDetails;
