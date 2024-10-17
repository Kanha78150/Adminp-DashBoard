import { useState } from "react";
import React from "react";
import { Chart } from "react-google-charts";
import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegGrinStars } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoTimerOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import DashboardBox from "../components/UI/DashboardBox";
import Sidebar from "../components/UI/Sidebar";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2021", 1000, 400],
  ["2022", 1170, 460],
  ["2023", 660, 1120],
  ["2024", 1030, 540],
];

export const options = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "50%", height: "70%" },
};

const Home = () => {
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Show By, Brand By, Catagory By, Search By
  const [showBy, setShowBy] = useState("");
  const [catagory, setCatagory] = useState("");
  const [brand, setBrand] = useState("");
  const [search, setSearch] = useState("");
  return (
    <div className="content d-flex">
      <div className={`sidebarWrapper`}>
        <Sidebar />
      </div>

      <div className="contentPage">
        <div className="rightContent w-100">
          <div className="row dashboradrowWrapper">
            <div className="col-md-8">
              <div className="dashboardbox-wrapper d-flex w-100">
                <DashboardBox
                  color={["#1da256", "#48d483"]}
                  icon={<FaUserAlt />}
                  title={"Users"}
                  qty={987}
                  grow={true}
                />
                <DashboardBox
                  color={["#c012e2", "#eb64fe"]}
                  icon={<FaCartArrowDown />}
                  title={"Oders"}
                  qty={1027}
                  grow={true}
                />
                <DashboardBox
                  color={["#2c78e5", "#60aff5"]}
                  icon={<FaStore />}
                  title={"Products"}
                  qty={29000}
                  grow={false}
                />
                <DashboardBox
                  color={["#e1950e", "#f3cd29"]}
                  icon={<FaRegGrinStars />}
                  title={"Reviews"}
                  qty={593}
                  grow={true}
                />
              </div>
            </div>
            <div className="col-md-4 ps-0">
              <div className="box graphbox">
                <div className=" d-flex align-items-center">
                  <h6 className=" text-white my-0">Total Sales</h6>

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

                <h3 className=" text-white fs-2">$3,787,876.40</h3>
                <p className=" text-white">$3,234,212.80 Last Month</p>

                <Chart
                  chartType="AreaChart"
                  width="100%"
                  height="250px"
                  data={data}
                />
              </div>
            </div>
          </div>

          <div className="card shadow border-0 p-3">
            <h3 className="b-heading">Best Selling Products</h3>

            <div className="row cardFilters mt-3">
              <div className="col-md-3">
                <p className="p-filter">Show By</p>
                <FormControl size="small" className="w-100">
                  <Select
                    value={showBy}
                    onChange={(e) => setShowBy(e.target.value)}
                    className="w-100"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="col-md-3">
                <p className="p-filter">Catagory By</p>
                <FormControl size="small" className="w-100">
                  <Select
                    value={catagory}
                    onChange={(e) => setCatagory(e.target.value)}
                    className="w-100"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="col-md-3">
                <p className="p-filter">Brand By</p>
                <FormControl size="small" className="w-100">
                  <Select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-100"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>

              <div className="col-md-3">
                <p className="p-filter">Search By</p>
                <FormControl size="small" className="w-100">
                  <Select
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-100"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            <div className="table-responsive mt-3">
              <table className="table table-bordered align-middle v-align">
                <thead className=" thead-dark">
                  <tr className="text-uppercase table-dark">
                    <th>Uid</th>
                    <th>Products</th>
                    <th>Catagory</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Rating</th>
                    <th>Order</th>
                    <th>Sales</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>#1</td>
                    <td>
                      <div className="table-conatiner">
                        <div className="table-img-prodcut">
                          <img
                            src="../assets/images/Admin Logo.png"
                            alt="err"
                          />
                        </div>
                        <div className="info">
                          <h6>Tops and skirt set for </h6>
                          <p>Women's exclusive summer Top</p>
                        </div>
                      </div>
                    </td>
                    <td>Womans</td>
                    <td>Siant</td>
                    <td>Rs: 871.89</td>
                    <td>1436</td>
                    <td>4.1</td>
                    <td>209</td>
                    <td>20k</td>
                    <td>
                      <div className="action d-flex align-items-center gap-3">
                        <Button
                          color="secondary"
                          className="action-btns secondary-btn"
                        >
                          <IoMdEye />
                        </Button>
                        <Button
                          color="success"
                          className="action-btns success-btn"
                        >
                          <FaPen />
                        </Button>
                        <Button color="error" className="action-btns error-btn">
                          <MdDelete />
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className=" d-flex justify-content-between align-items-center">
                <p>
                  Show <strong>12</strong> of <strong>60</strong> results
                </p>
                <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
