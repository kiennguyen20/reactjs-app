import React from "react";
import getParams from "../../utils/getParams";
import Layout from "./../../component/Layout/index";
import ProductStore from "./ProductStore";

import "./style.css";
import ProductPage from "./ProductPage/index";
import PcAndAccessories from "./PcAndAccessories";
/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    switch (params.type) {
      case "store":
        content = <ProductStore {...props} />;
        break;
      case "page":
        content = <ProductPage {...props} />;
        break;
      default:
        content = <PcAndAccessories {...props} />;
    }
    return content;
  };
  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
