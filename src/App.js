import MainContent from "./components/MainContent";
import MainHeader from "./components/MainHeader";
import SideDrawer from "./components/SideDrawer";

import "./App.css";

function App() {
  console.log(process.env.REACT_APP_BASE_URL);
  return (
    <div className="container">
      <section className="leftContainer">
        <SideDrawer />
      </section>
      <section className="rightContainer">
        <MainHeader />
        <MainContent />
      </section>
    </div>
  );
}

export default App;
