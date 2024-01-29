/* eslint-disable react/prop-types */
import { Outlet, Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";

// import logo from "../../assets/media/netflix_logo.png";
import kidsIcon from "../../assets/media/kids_icon.png";
import avatar from "../../assets/media/avatar.png";
import SearchNav from "../atoms/SearchNav";
import { useEffect, useState } from "react";

function NavBarCustom({ bg, searchVal, searchHandler }) {
  const location = useLocation();
  const [currentURL, setCurrentURL] = useState("");
  useEffect(() => {
    setCurrentURL(location.pathname);
  }, [location]);
  return (
    <>
      <Navbar
        bg={bg || "dark"}
        data-bs-theme={bg ? "" : "dark"}
        className="position-fixed top-0 w-100 bg-black"
        style={{ zIndex: "100" }}
      >
        <Container fluid className="ps-5 pe-5">
          <Navbar.Brand className="fw-bold">
            <Link to="/" className="nav-link">
              <h1 className="fs-4 text-danger m-0 fw-bold">NOTNETFLIX</h1>
              {/* <img
                src={logo}
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              /> */}
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/favourite" className="nav-link">
              Favourite
            </Link>
            <Link to="/tv-series" className="nav-link">
              TV Series
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center">
            {currentURL === "/" && (
              <SearchNav searchVal={searchVal} searchHandler={searchHandler} />
            )}
            <img src={kidsIcon} alt="profiles" width="35px" className="ms-3" />

            <DropdownButton
              id="dropdown-basic-button"
              align="end"
              variant="black"
              title={<img src={avatar} alt="profiles" width="35px" />}
            >
              <Dropdown.Item href="#/action-1">Manage Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Transfer Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
            </DropdownButton>
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default NavBarCustom;
