import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <span>
        {" "}
        <FaFacebook />{" "}
      </span>
      <span>
        <FaInstagram />
      </span>
      <span>
        {" "}
        <FaTwitter />
      </span>
      <span>
        {" "}
        <FaGithub />
      </span>
    </div>
  );
}

export default Footer;
