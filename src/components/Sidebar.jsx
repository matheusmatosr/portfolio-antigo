import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Matos" />
      <p className="title">Desenvolvedor web</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1u50nn704S_eDPLvSXXwz7EoJpXq0C1JR/view?usp=sharing" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
