import React, { useEffect, useState } from "react";
import PrintServices from '../../../services/PrintServices';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../../scss/index.scss";

const Navbar = () => {
  const componentName = 'navbar';

  const arrayOfNavigationTitles = [];
  const [navigationTitles, setNavigationTitles] = useState([]);
  const [subNavigationTitles, setSubNavigationTitles] = useState([]);

  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState("navbar");
  const [iconDirection, setIconDirection] = useState(faChevronDown);

  const [mysticTopics, setMysticTopics] = useState();
  const [yogaTopics, setYogaTopics] = useState();
  const [travelTopics, setTravelTopics] = useState();

  useEffect(() => {
    const fetchFirstLevel = async () => {
      return PrintServices.getCategoryItems();
    }

    fetchFirstLevel().then(value => {
      value.data.categoryItemCollection.items.map((item) => {
        const firstLevelData = {
          id: item.id,
          title: item.title,
          slug: item.slug
        };
        arrayOfNavigationTitles.push(firstLevelData);
      });
    });

    setNavigationTitles(arrayOfNavigationTitles);

    const fetchMysticLevel = async () => {
      return PrintServices.getMysticCategories();
    }

    const fetchYogaLevel = async () => {
      return PrintServices.getYogaCategories();
    }

    const fetchTravelLevel = async () => {
      return PrintServices.getTravelCategories();
    }

    fetchMysticLevel().then(value => {
      setMysticTopics(value.data.categoryItemCollection.items);
    });

    fetchYogaLevel().then(value => {
      setYogaTopics(value.data.categoryItemCollection.items);
    });

    fetchTravelLevel().then(value => {
      setTravelTopics(value.data.categoryItemCollection.items);
    });
  }, []);

  const selectNavTitle = (id) => {
    setIsOpen(!isOpen);
    if (visible === false) {
      setVisible(true);
    }
    if (id === 1) {
      setSubNavigationTitles(mysticTopics);
    } else if (id === 2) {
      setSubNavigationTitles(yogaTopics);
    } else if (id === 3) {
      setSubNavigationTitles(travelTopics);
    } else if (id === 0) {
      setIsOpen(false);
    }
  };

  const listenScrollEvent = (event) => {
    if (window.scrollY < 70) {
      return setHeader("navbar")
    } else if (window.scrollY > 70) {
      return setHeader("navbar2")
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const setIcon = () => {
    let navbar = document.getElementById('header__navbar');
    if (navbar.className === 'navbar__topnav') {
      navbar.className += ' responsive';
      setIconDirection(faChevronUp);
    } else {
      navbar.className = 'navbar__topnav';
      setIconDirection(faChevronDown);
    }
  }

  return (
    <div className="wrapper">
      <div className={`${header}`}>
        <div className={`${componentName}__topnav`} id="header__navbar">
          <Link key="logo" to="/" className={`${componentName}__logo`}>LOGO</Link>
          {/* <a href="#home" class="active">Home</a> */}
          {navigationTitles.map((item, index) => {
            return (
              <div className="dropdown" key={index}>
                <Link
                  className={`${componentName}__drop-cta`}
                  key={index}
                  to={item.slug}
                  onClick={() => selectNavTitle(item.id)}
                  onMouseEnter={() => selectNavTitle(item.id)}
                  >
                  {item.title}
                </Link>
                <div className="dropdown-content">
                  {subNavigationTitles.map((item) => {
                    return (
                      <Link
                        key={index + `-${item.id}`}
                        className={`${componentName}__sub-drop-cta`}
                        to={item.slug}>
                        {item.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <Link key="about" to="/about" className={`${componentName}__drop-cta`}>
            About Me
          </Link>
          <a
            key="instagram"
            className={`${componentName}__drop-cta`}
            href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="icon__instagram"/>
          </a>
          <span key="chevron" className="icon__chevron"><FontAwesomeIcon
            id="header__icon"
            onClick={() => setIcon()}
            icon={iconDirection}
          /></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
