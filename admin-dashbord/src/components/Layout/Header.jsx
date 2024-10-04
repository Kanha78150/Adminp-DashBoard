import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Admin Logo.png";
import user from "../../assets/images/user.jpg";

import Button from "@mui/material/Button";

import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import Search from "../UI/Search";

export const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center bg-light navBar">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-3 part1">
              <NavLink
                to={"/"}
                className="d-flex align-items-center text-decoration-none LOGO"
              >
                <img src={logo} alt="Logo" />
                <span className="ms-2">Global-Z</span>
              </NavLink>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 ps-4">
              <Button className="rounded-circle me-3">
                <MdMenuOpen />
              </Button>

              <Search />
            </div>

            <div className="col-sm-6 d-flex align-items-center justify-content-end part3 gap-2 ">
              <Button className="rounded-circle me-3">
                <MdLightMode />
              </Button>

              <Button className="rounded-circle me-3">
                <FaShoppingCart />
              </Button>
              <Button className="rounded-circle me-3">
                <MdEmail />
              </Button>
              <Button className="rounded-circle me-3">
                <IoMdNotifications />
              </Button>

              <div className="myAccWrapper">
                <div className="myAcc d-flex align-items-center gap-1">
                  <div className="userImg">
                    <span className="rounded-circle d-flex align-items-center justify-content-center">
                      <img src={user} alt="User" />
                    </span>
                  </div>

                  <div className="userInfo d-flex flex-column align-items-start">
                    <h5 className="mb-0 fs-6">Bholasankar nanda</h5>
                    <p className="fs-6 mb-0">@Sankar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
