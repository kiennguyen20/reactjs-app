import React, { useState, useEffect } from "react";
import "./style.css";

import { IoIosArrowDown, IoIosCart, IoIosSearch } from "react-icons/io";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../MaterialUI";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./../UI/Cart";
import {
  login,
  signout,
  getCartItems,
  register as _register,
} from "./../../actions/auth.action";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const userRegister = () => {
    const user = { email, password };
    if (email === "" || password === "") {
      return;
    }
    dispatch(_register(user));
  };
  const userLogin = () => {
    if (register) {
      userRegister();
    } else {
      dispatch(login({ email, password }));
    }
  };
  const logout = () => {
    dispatch(signout());
  };
  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={<a className="fullName">{auth.user.email}</a>}
        menus={[
          { label: "My Profile", href: "", icon: null },
          { label: "Orders", href: `/account/orders`, icon: null },
          { label: "Danh sách yêu thích", href: "", icon: null },
          { label: "Đăng xuất", href: "", icon: null, onClick: logout },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <a
            className="loginButton"
            onClick={() => {
              setRegister(false);
              setLoginModal(true);
            }}
          >
            Đăng nhập
          </a>
        }
        menus={[
          { label: "My Profile", href: "", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
            onClick: () => {
              !auth.authenticate && setLoginModal(true);
            },
          },
          { label: "Danh sách yêu thích", href: "", icon: null },
        ]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <a
              onClick={() => {
                setLoginModal(true);
                setRegister(true);
              }}
              style={{ color: "#2874f0" }}
            >
              Đăng ký
            </a>
          </div>
        }
      />
    );
  };
  return (
    <div className="header">
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>{register ? "Đăng ký" : "Đăng nhập"}</h2>
              <p>Mua hàng online với nhiều ưu đãi hơn tại GEARVN</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                <MaterialInput
                  type="text"
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <MaterialInput
                  type="password"
                  label="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={register ? "Đăng ký" : "Đăng Nhập"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />

                <p style={{ textAlign: "center" }}>OR</p>

                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">
        <div className="logo">
          <a href="/">
            <img
              src="//theme.hstatic.net/1000026716/1000440777/14/logo.svg?v=21482"
              className="logoimage"
              title="GEARVN PC HIGH-END & GAMING GEAR"
              alt="gearvn"
            />
          </a>
        </div>
        <div
          style={{
            padding: "0 10px",
          }}
        >
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={"Nhập mã hoặc tên sản phẩm ..."}
            />
            <div className="searchIconContainer">
              <IoIosSearch
                style={{
                  color: "#2874f0",
                }}
              />
            </div>
          </div>
        </div>
        <div className="rightMenu">
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: "Quảng Cáo", href: "", icon: null },
              { label: "Tải Ứng Dụng", href: "", icon: null },
            ]}
          />

          <div>
            <a className="cart" href="/cart">
              <Cart count={Object.keys(cart.cartItems).length} />
              <span style={{ margin: "0 10px" }}>Cart</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
