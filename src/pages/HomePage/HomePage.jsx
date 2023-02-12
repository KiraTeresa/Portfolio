import MyImage from "../../components/About/Image";
import "./homepage.scss"
import Slider from "../../components/Slider/Slider";
import projects from "../../data/projects.json"

function HomePage() {
  return (
    <div className="container homepage">
      <MyImage />
      <Slider latestProject={projects[0]} />
    </div>
  );
}

export default HomePage;