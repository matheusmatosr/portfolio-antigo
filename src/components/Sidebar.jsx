import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpeg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Matheus Matos" className="imgEu"/>
      <p className="title">Desenvolvedor web</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/1j8ylH_jui8vGwWoi7t0R2rY33yENg98c/view?usp=share_link" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;
