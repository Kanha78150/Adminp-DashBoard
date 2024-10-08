import Sidebar from "../components/UI/Sidebar";

const Home = () => {
  return (
    <div className="content d-flex">
      <div className="sidebarWrapper">
        <Sidebar />
      </div>

      <div className="contentPage">
        <h1>Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
