import "./Project.css";
import { FaGithub } from "react-icons/fa";
import Projects from "../../utils";
const Project = () => {
  return (
    <>
      <div className="projectPage">
        {Projects.map((project) => {
          const { img, projectName, git, demo, id } = project;
          return (
            <>
              <div className="card first" key={id}>
                <div>
                  <img src={img} alt="" />
                </div>
                <div className="weatherName">
                  {projectName}
                  <div className="projectsicon">
                    <button className="projectButton">
                      <a href={git} target="blank">
                        <FaGithub />
                      </a>
                    </button>

                    <button className="projectButton">
                      <a href={demo} target="blank">
                        Live
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {/* <div className="card first">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg"
              alt=""
            />
          </div>
          <div className="weatherName">
            Redux Cart
            <div className="projectsicon">
              <button className="projectButton">
                <a
                  href="https://github.com/banchet18/reacts-projects/tree/main/redux-project"
                  target="blank"
                >
                  <FaGithub />
                </a>
              </button>

              <button className="projectButton">
                <a href="https://reduxaddtocart.netlify.app/" target="blank">
                  Live
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card first">
          <div>
            <img
              src="https://t4.ftcdn.net/jpg/04/97/80/99/360_F_497809944_FMo3DO6j7XSlb9rZKOlnqaaWoJhuZXBm.jpg"
              alt=""
            />
          </div>
          <div className="weatherName">
            Redux Cart
            <div className="projectsicon">
              <button className="projectButton">
                <a
                  href="https://github.com/banchet18/reacts-projects/tree/main/redux-project"
                  target="blank"
                >
                  <FaGithub />
                </a>
              </button>

              <button className="projectButton">
                <a href="https://reduxaddtocart.netlify.app/" target="blank">
                  Live
                </a>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default Project;
