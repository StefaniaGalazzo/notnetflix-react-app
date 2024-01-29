import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-secondary px-5 py-4">
      <div className="container">
        <div className="ms-5 me-5 row px-5 py-4">
          <div className="d-flex mb-3">
            <FaFacebook size={"30px"} className="me-2" />
            <FaInstagram size={"30px"} className="me-2" />
            <FaTwitter size={"30px"} className="me-2" />
            <FaYoutube size={"30px"} className="me-2" />
          </div>
          <div className="col">
            <a className="nav-link text-secondary mb-2">Audio and Subtitles</a>
            <a className="nav-link text-secondary mb-2">Media Center</a>
            <a className="nav-link text-secondary mb-2">Privacy</a>
            <a className="nav-link text-secondary mb-2">Contact Us</a>
            <button className="bg-transparent text-secondary border border-secondary mt-2 py-1 px-3">
              Service Code
            </button>
          </div>
          <div className="col">
            <a className="nav-link text-secondary mb-2">Audio Description</a>
            <a className="nav-link text-secondary mb-2">Investor Relations</a>
            <a className="nav-link text-secondary mb-2">Legal Notices</a>
          </div>
          <div className="col">
            <a className="nav-link text-secondary mb-2">Help Center</a>
            <a className="nav-link text-secondary mb-2">Jobs</a>
            <a className="nav-link text-secondary mb-2">Cookie Preferences</a>
          </div>
          <div className="col">
            <a className="nav-link text-secondary mb-2">Girft Cards</a>
            <a className="nav-link text-secondary mb-2">Terms of Use</a>
            <a className="nav-link text-secondary mb-2">
              Corporate Information
            </a>
          </div>
        </div>
        <p className="ms-5 px-5">© 1997-2019 Netflix, Inc. </p>
      </div>
    </footer>
  );
}
