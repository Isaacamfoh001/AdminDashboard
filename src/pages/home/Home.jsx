import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/widget";
import "./home.scss";
import FeaturedChart from "../../components/featuredChart/FeaturedChart";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
const Home = () => {
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="widgets">
            <Widget type="users" />
            <Widget type="orders" />
            <Widget type="earnings" />
            <Widget type="balance" />
          </div>
          <div className="charts">
            <FeaturedChart />
            <Chart title="Revenue for the previous year" aspect={2 / 1} />
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
