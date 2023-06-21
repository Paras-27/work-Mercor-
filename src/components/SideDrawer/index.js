import ColorFilter from "../../assets/images/colorfilter.png";
import { ArrowLeft } from "../../assets/icons/ArrowLeft";
import NavMenu from "./NavMenu";
import MyProjects from "./MyProjects";
import Thoughts from "./Thoughts";

import "./SideDrawer.css";

export default function SideDrawer({ children, header }) {
  return (
    <div className="leftcont">
      <div className="headerm">
        <div className="containerlogo">
          <img className="logo" src={ColorFilter} alt="color-filter" />
          <div className="project">Project M.</div>
        </div>
        <button className="leftButton">
          <ArrowLeft className="arrow" />
        </button>
      </div>
      <main>
        <NavMenu />
        <MyProjects />
        <Thoughts />
      </main>
    </div>
  );
}
