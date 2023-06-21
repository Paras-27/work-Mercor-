import { Home } from "../../assets/icons/Home";
import { Message } from "../../assets/icons/Message";
import { Task } from "../../assets/icons/Task";
import { Profile } from "../../assets/icons/Profile";
import { Setting } from "../../assets/icons/Setting";

import "./NavMenu.css";

export default function NavMenu() {
  return (
    <ul className="navMenu">
      <div className="line"></div>
      <li className="menuItem">
        <Home />
        <span>Home</span>
      </li>
      <li className="menuItem">
        <Message />
        <span>Messages</span>
      </li>
      <li className="menuItem">
        <Task />
        <span>Tasks</span>
      </li>
      <li className="menuItem">
        <Profile />
        <span>Members</span>
      </li>
      <li className="menuItem">
        <Setting />
        <span>Settings</span>
      </li>
    </ul>
  );
}
