import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";

import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { MdLockPerson } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { TbBrandProducthunt } from "react-icons/tb";
import { FaFileInvoice } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MyContext } from "../../App";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isToggle, setIsToggle] = useState(false);
  const isOpenSubMenu = (index) => {
    setActiveTab(index);
    setIsToggle(!isToggle);
  };

  const context = useContext(MyContext);

  return (
    <>
      <div className="sidebar">
        <ul className="sidebarUl">
          <li className="sidebarLi">
            <NavLink to="/">
              <Button className="w-100">
                <span className="icon">
                  <RxDashboard />
                </span>
                Dashboard
              </Button>
            </NavLink>
          </li>

          <li className="sidebarLi">
            <Button
              className={`w-100 ${activeTab === 1 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(1)}
            >
              <span className="icon">
                <MdLockPerson />
              </span>
              Authentication
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Login
                  </NavLink>
                </li>
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    LogOut
                  </NavLink>
                </li>
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Verification
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="sidebarLi">
            <Button
              className={`w-100 ${activeTab === 2 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(2)}
            >
              <span className="icon">
                <FaUser />
              </span>
              User
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Profile
                  </NavLink>
                </li>

                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Order History
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebarLi">
            <Button
              className={`w-100 ${activeTab === 3 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(3)}
            >
              <span className="icon">
                <TbBrandProducthunt />
              </span>
              Products
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 3 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Product List
                  </NavLink>
                </li>
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Product View
                  </NavLink>
                </li>
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Product Upload
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebarLi">
            <Button
              className={`w-100 ${activeTab === 4 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(4)}
            >
              <span className="icon">
                <FaFileInvoice />
              </span>
              Invoices
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 4 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Download Invoices
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebarLi">
            <Button
              className={`w-100 ${activeTab === 5 ? "active" : ""}`}
              onClick={() => isOpenSubMenu(5)}
            >
              <span className="icon">
                <FaShoppingCart />
              </span>
              Orders
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 5 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="submenu">
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Order
                  </NavLink>
                </li>
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Product View
                  </NavLink>
                </li>
                <li className="subLi">
                  <NavLink to="/" className="subLink">
                    Product Upload
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li className="sidebarLi">
            <NavLink to="/">
              <Button
                className={`w-100 ${activeTab === 6 ? "active" : ""}`}
                onClick={() => isOpenSubMenu(6)}
              >
                <span className="icon">
                  <IoSettingsOutline />
                </span>
                Setting
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
