import Sidebar from "../components/UI/Sidebar";

const Home = () => {
  return (
    <div className="content d-flex">
      <div className="sidebarWrapper">
        <Sidebar />
      </div>

      <div className="contentPage">
        <div className="rightContent">
          <h1>Dashbord</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
