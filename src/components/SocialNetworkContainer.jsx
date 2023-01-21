import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn /> }
];
const socialNetwork = [
  { name: "github", icon: <FaGithub /> }
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/" className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>
      ))},
      {socialNetwork.map((network) => (
        <a href="https://github.com/matheusmatosr" className="social-btn" id={network.name} key={network.name}>
         {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
