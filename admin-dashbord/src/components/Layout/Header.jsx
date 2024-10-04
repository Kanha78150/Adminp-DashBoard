import { NavLink } from "react-router-dom";
import * as React from "react";

import logo from "../../assets/images/Admin Logo.png";
import user from "../../assets/images/user.jpg";

import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";

import Search from "../UI/Search";

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpenNotifications, setisOpenNotifications] = React.useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotifications);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosemyAcc = () => {
    setAnchorEl(null);
  };

  const handelOpnnotifications = () => {
    setisOpenNotifications(true);
  };
  const handleClosenotifications = () => {
    setisOpenNotifications(false);
  };
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

              <div className="myNotificationWrapper position-relative">
                <Button
                  className="rounded-circle me-3"
                  onClick={handelOpnnotifications}
                >
                  <IoMdNotifications />
                </Button>
                <Menu
                  anchorEl={isOpenNotifications}
                  className="notifications"
                  id="notifications"
                  open={openNotifications}
                  onClose={handleClosenotifications}
                  onClick={handleClosenotifications}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClosenotifications}>
                    <Avatar /> My Notifications
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClosenotifications}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClosenotifications}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClosenotifications}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>

              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center gap-1"
                  onClick={handleClick}
                >
                  <div className="userImg">
                    <span className="rounded-circle d-flex align-items-center justify-content-center">
                      <img src={user} alt="User" />
                    </span>
                  </div>

                  <div className="userInfo d-flex flex-column align-items-start">
                    <h5 className="mb-0 user-name">Bholasankar nanda</h5>
                    <p className="mb-0 user-email">@Sankar</p>
                  </div>
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleClosemyAcc}
                  onClick={handleClosemyAcc}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <MenuItem onClick={handleClosemyAcc}>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClosemyAcc}>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem onClick={handleClosemyAcc}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem onClick={handleClosemyAcc}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
