import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setMenu, setScrollStatus } from "./headerSlice";
import { getHeader, getSearchApi } from "../../../services/routes.services";
import HeaderStyle from "../../Style/Header.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import classNames from "classnames";
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenu } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const dispatch = useDispatch();
  const { menu, isScrolled } = useSelector((state) => state.header);
  const [searchBox, setSearchBox] = useState(false);
  const [wondowlScroll, setWindowScroll] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [isActiveSubMenu, setIsActiveSubMenu] = useState(false);
  const [isActiveMegaMenu, setIsActiveMegaMenu] = useState(false);
  const navigate = useNavigate();
  const ToggleMenu = () => {
    setIsActive(!isActive);
  };
  const subMenuHandler = (item) => {
    if (
      item.children &&
      Array.isArray(item.children) &&
      item.children.length > 0
    ) {
      if (item.megaMenu === "on") {
        // Toggle mega menu and close regular submenu if open
        setIsActiveSubMenu(false);
        setIsActiveMegaMenu(!isActiveMegaMenu);
      } else {
        // Toggle regular submenu and close mega menu if open
        setIsActiveMegaMenu(false);
        setIsActiveSubMenu(!isActiveSubMenu);
      }
    }
  };
  const SubMenu = ({ subItems }) => {
    const sortedSubItems = [...subItems].sort(
      (a, b) => a.orderNumber - b.orderNumber
    );
    return (
      <ul
        className={
          `child-element ${isActiveSubMenu ? HeaderStyle.active : ""}` +
          " " +
          HeaderStyle.subMenu
        }
      >
        {sortedSubItems.map((subItem) => (
          <li key={subItem.orderNumber}>
            <Link to={subItem.linkUrl} title={subItem.linkText}>
              {subItem.linkText}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  const MegaMenu = ({ subItems }) => {
    const sortedSubItems = [...subItems].sort(
      (a, b) => a.orderNumber - b.orderNumber
    );
    return (
      <div
        className={
          `megaMenuStyle child-element ${
            isActiveMegaMenu ? HeaderStyle.active : ""
          }` +
          " " +
          HeaderStyle.megaMenu
        }
      >
        <Tabs className={HeaderStyle.tabContainer}>
          <div className={HeaderStyle.leftArea}>
            <TabList className="offTabStyle">
              {sortedSubItems.map((subItem) => (
                <Tab key={subItem.orderNumber}>{subItem.linkText}</Tab>
              ))}
            </TabList>
          </div>
          <div className={HeaderStyle.RightArea}>
            {sortedSubItems.map((subItem) => (
              <TabPanel key={subItem.orderNumber}>
                <ul className={HeaderStyle.megaLink}>
                  {subItem.children
                    .slice() // Create a new array
                    .sort((a, b) => a.orderNumber - b.orderNumber)
                    .map((item) => {
                      return (
                        <>
                          {item.linkText !== "Wearhousing" && (
                            <li key={item.orderNumber}>
                              <Link to={item.linkUrl} title={item.linkText}>
                                {item.linkText}
                              </Link>
                            </li>
                          )}
                        </>
                      );
                    })}
                </ul>
              </TabPanel>
            ))}
          </div>
        </Tabs>
      </div>
    );
  };
  const handleSearch = async () => {
    try {
      if (query !== "") {
        const response = await getSearchApi(query);
        setSearchResults(response.data);
        navigate(`/search?query=${query}`, {
          state: { searchResults: response.data },
        });
      } else {
        alert("Please enter value");
      }
    } catch (err) {
      console.error(err);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  const SearchHandler = () => {
    setSearchBox(true);
  };
  const CloseSearchHandler = () => {
    setSearchBox(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowScroll(window.scrollY > 100);
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      dispatch(setScrollStatus(window.scrollY > 300));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch]);

  useEffect(() => {
    getHeader()
      .then((res) => {
        dispatch(setMenu(res.data.headers));
      })
      .catch((error) => {
        console.error("Failed to fetch header data", error);
      });
  }, [dispatch]);

  if (!menu || menu.length === 0) {
    return null;
  }

  const sortedMenu = [...menu].sort((a, b) => a.orderNumber - b.orderNumber);

  return (
    <header className={wondowlScroll ? "fixHeader" : null}>
      <Container>
        <Row>
          <Col>
            <div className={HeaderStyle.headerFlex}>
              <div className={HeaderStyle.Logo}>
                <Link to="/" title="TQcert">
                  <img
                    alt="TQcert Logo"
                    src={require("../../../assest/images/Qcert-logo.png")}
                    width="89"
                    height="52"
                  />
                </Link>
              </div>
              <div
                className={
                  `child-element ${isActive ? HeaderStyle.active : ""}` +
                  " " +
                  HeaderStyle.Menu
                }
              >
                <button
                  type="button"
                  className={HeaderStyle.closeMenu}
                  onClick={ToggleMenu}
                >
                  <IoMdClose />{" "}
                </button>
                <ul>
                  {sortedMenu.map((item) => (
                    <li key={item.orderNumber}>
                      <Link to={item.linkUrl} title={item.linkText}>
                        {item.linkText}
                      </Link>
                      {item.children &&
                        Array.isArray(item.children) &&
                        item.children.length > 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              subMenuHandler(item);
                            }}
                            className={HeaderStyle.subMenuIcon}
                          >
                            <FaCaretDown />
                          </button>
                        )}
                      {item.children &&
                        Array.isArray(item.children) &&
                        item.children.length > 0 &&
                        (item.megaMenu === "on" ? (
                          <MegaMenu subItems={item.children} />
                        ) : (
                          <SubMenu subItems={item.children} />
                        ))}
                    </li>
                  ))}
                </ul>
              </div>
              {/* <div className={HeaderStyle.SocialIcon}>
                <ul>
                  <li className={HeaderStyle.ToggleMenu}>
                    <button type="button" onClick={ToggleMenu}>
                      <HiOutlineMenu />
                    </button>
                  </li>
                </ul>
              </div> */}
              
              <div
                className={HeaderStyle.SocialIcon}
                // style={{ display: "none" }}
              >
                <ul>
                  <li className={HeaderStyle.ToggleMenu}>
                    <button type="button" onClick={ToggleMenu}>
                      <HiOutlineMenu />
                    </button>
                  </li>
                  {/* <li className={HeaderStyle.Search}>
                    {searchBox ? (
                      <button
                        type="button"
                        title="Search"
                        onClick={CloseSearchHandler}
                        className={HeaderStyle.searchBtn}
                      >
                        <IoMdClose />
                      </button>
                    ) : (
                      <button
                        type="button"
                        title="Search"
                        onClick={SearchHandler}
                        className={HeaderStyle.searchBtn}
                      >
                        <FiSearch />
                      </button>
                    )}
                    {searchBox && (
                      <div className={HeaderStyle.searchBox}>
                        <input
                          type="text"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder="Search..."
                          onKeyPress={handleKeyPress}
                        />
                        <button onClick={handleSearch}>
                          <FiSearch />
                        </button>
                      </div>
                    )}
                  </li> */}
                  {/* <li className={HeaderStyle.insta}>
                    <Link
                      to="https://in.linkedin.com/company/tqcertservices"
                      target="_blank"
                      title="TQ Cert Services Private Limited"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </li> */}
                  <li>
                    <a
                      href="https://www.tata.com/"
                      target="_blank"
                      title="Tata"
                    >
                      <img
                        src={require("../../../assest/images/tata-logo.png")}
                        width="48"
                        height="41"
                        alt="Tata Logo"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
