import "./Header.css";
import React, { useEffect, useState } from "react";
import logo from "../../assits/images/logo/pk.png";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAction } from "../../slices/categories/categoriesAction";
export const Header = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    !categories.length && dispatch(getCategoriesAction());
    function handleWindowResize() {
      setwindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [dispatch, categories.length]);
  console.log(window.location);
  return (
    <Navbar expand="lg" variant="dark" className="header_navbar color-white">
      <div className="container-fluid ">
        <Col md={2}>
          <Navbar.Brand className="navbar-brand d-flex flex-column justify-content-center align-items-center">
            <img src={logo} alt="" className="logo " />
          </Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="navbar-nav ms-auto mb-2 mb-lg-0 ">
            {windowWidth < 992 && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="color-white dropdown-toggle search__filter-toggle"
                >
                  Categories
                </Dropdown.Toggle>
                <Dropdown.Menu
                  variant="dark"
                  className="categories__toggle-menu -util-togglemenu"
                >
                  {categories.map(
                    (item, i) =>
                      !item.catId && (
                        <Link
                          className="nav-link text-white"
                          to={"/categories/" + item._id}
                          key={i}
                          id={item._id}
                        >
                          {item.name}
                        </Link>
                      )
                  )}
                </Dropdown.Menu>
              </Dropdown>
            )}
            {!window.location.pathname === "/" && (
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/offers"
              >
                Offers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/bestsellers">
                Best Sellers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/newarrivals">
                New Arrivals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/dealsandsales">
                Deals and Sales
              </Link>
            </li>

            <li className="nav-item nav_icons">
              <Link
                className="nav-link active nav_icons__icon"
                to="/favourites"
              >
                {windowWidth > 991 ? (
                  <i className="fa-solid fa-heart -util-font15"></i>
                ) : (
                  "Favourites"
                )}
              </Link>
              <span className="nav_icons__count">17</span>
            </li>

            <li className="nav-item nav_icons">
              <Link className="nav-link active nav_icons__icon" to="/cart">
                {windowWidth > 991 ? (
                  <i className="fa-solid fa-cart-shopping -util-font15"></i>
                ) : (
                  "Cart"
                )}
              </Link>
              <span className="nav_icons__count">2</span>
            </li>
            {windowWidth < 992 && (
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="color-white dropdown-toggle "
                >
                  Profile
                </Dropdown.Toggle>
                <Dropdown.Menu
                  variant="dark"
                  className="profile__toggle-menu -util-togglemenu"
                >
                  <Link className="nav-link text-white" to="/dd">
                    Profilef d 
                  </Link>
                  <Dropdown.Item href="#/action-1">Purchases</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Reviews</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Payment Methods
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Close Account</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Switch Account
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </Nav>
          <div className="search-and-icons">
            <Form
              className="d-flex align-items-center mb-2 categories_search"
              role="search"
            >
              <Dropdown>
                <Dropdown.Toggle
                  variant="none"
                  id="dropdown-basic"
                  className="color-white dropdown-toggle search__filter-toggle"
                >
                  All
                </Dropdown.Toggle>
                <Dropdown.Menu
                  variant="dark"
                  className="categories_search__menu -util-togglemenu"
                >
                  <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Category 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Category 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Category 3</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Category 4</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Category 5</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Category 6</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                className="form-control me-2 search_form__control"
                type="text"
                aria-label="Search"
              />
              <Button variant="none" className="search_icon">
                <i className="fa-solid fa-magnifying-glass -util-font15 color-pastrelred "></i>
              </Button>
            </Form>
          </div>
          <div className=" user color-white ">
            {windowWidth > 991 && (
              <div className="user_profile">
                <p className="user_profile__user">Hello Pradeep !</p>
                <p className="user_profile__address">
                  Delivery Address: 1-3 Clarance Street NSW 2135
                </p>
                <p className="user_profile__profile">
                  <Button
                    variant="none"
                    className=" user_profile__profie-btn btn-logout text-white"
                  >
                    <i class="fa-solid fa-user -util-font15"></i>
                    <i class="fa-solid fa-caret-down "></i>
                  </Button>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="user_profile__profie-dropdown"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu className="user_profile__profie-dropdown-items">
                      <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Purchases</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Reviews</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Payment Methods
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Close Account
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-1">
                        Switch Account
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </p>
              </div>
            )}
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
