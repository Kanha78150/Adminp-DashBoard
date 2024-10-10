import { FaUserAlt } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegGrinStars } from "react-icons/fa";
import { FaStore } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import DashboardBox from "../components/UI/DashboardBox";
import Sidebar from "../components/UI/Sidebar";

const Home = () => {
  return (
    <div className="content d-flex">
      <div className="sidebarWrapper">
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
              <div className="box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
