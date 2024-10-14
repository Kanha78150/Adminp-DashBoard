import { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const DashboardBox = (props) => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div
        className="dashboardbox"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
        }}
      >
        {props.grow === true ? (
          <span className="chart">
            <FaArrowTrendUp />
          </span>
        ) : (
          <span className="chart">
            <FaArrowTrendDown />
          </span>
        )}
        <div className="d-flex w-100">
          <div className="col1 text-white">
            <h4 className="mb-0">Total {props.title}</h4>
            <span className="text-white">{props.qty}</span>
          </div>
          <div className="ms-auto users-icon">
            {props.icon ? props.icon : ""}
          </div>
        </div>

        <div className=" d-flex align-items-center">
          <h6 className=" text-white my-0">Last Month</h6>

          <div className=" ms-auto">
            <Button
              variant="text"
              className="ms-auto text-white fs-3"
              onClick={handleClick}
            >
              <BsThreeDotsVertical />
            </Button>
            <Menu
              id="long-menu"
              MenuListProps={{
                "aria-labelledby": "long-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                paper: {
                  style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: "20ch",
                  },
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <IoTimerOutline /> Last Day
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <IoTimerOutline /> Last Week
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <IoTimerOutline /> Last Year
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardBox;
