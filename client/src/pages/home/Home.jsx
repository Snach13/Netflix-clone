import Featured from "../../components/featured/Featured.jsx";
import List from "../../components/list/List.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
