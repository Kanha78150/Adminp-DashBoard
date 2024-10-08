import Button from "@mui/material/Button";

import { RxDashboard } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className="sidebarUl">
          <li className="sidebarLi">
            <Button className="w-100">
              <span className="icon">
                <RxDashboard />
              </span>
              Dashboard
              <span className="arrow">
                <IoIosArrowForward />
              </span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
