import Main from "../../Components/Main/Main"
import Nav from "../../Components/Nav/Nav";
import "./home.css"

const Home = () => {
	return (
		<div className="site-main-box">
         <Nav />
         <Main videoId={"9"}/>
		</div>
	);
};

export default Home;
