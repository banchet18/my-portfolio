import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Home.css";
const Home = () => {
  return (
    <div className="homeSection">
      <div className="icons">
        <FaGithub className="iconGithub" />
        <FaLinkedin className="iconLinkedin" />
      </div>
      <div className="nameSection">
        <div className="chetan">
          ChetanKumar Banjara
          <span className="front">I'm a FrontEnd Developer</span>
        </div>
      </div>
    </div>
  );
};
export default Home;
