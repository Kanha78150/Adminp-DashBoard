import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const DashboardBox = (props) => {
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

          <Button variant="text" className="ms-auto text-white fs-3">
            <BsThreeDotsVertical />
          </Button>
        </div>
      </div>
    </>
  );
};
export default DashboardBox;
