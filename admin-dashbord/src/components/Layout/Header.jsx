import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Admin Logo.png";

import Button from "@mui/material/Button";

import { MdMenuOpen } from "react-icons/md";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  return (
    <>
      <header className="d-flex align-items-center bg-light navBar">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-xs-3 part1">
              <NavLink
                to={"/"}
                className="d-flex align-items-center text-decoration-none LOGO"
              >
                <img src={logo} alt="Logo" />
                <span className="ms-2 fw-bolder">Global-Z</span>
              </NavLink>
            </div>
            <div className="col-xs-3 d-flex align-items-center part2">
              <Button className="rounded-circle">
                <MdMenuOpen />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
