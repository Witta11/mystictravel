import React, { useEffect, useState } from "react";
import "../../../scss/index.scss";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import PrintServices from '../../../services/PrintServices';
import ClickOutside from '../../../hooks/ClickOutside';

const Navbar = () => {
  const componentName = 'navbar';

  const arrayOfNavigationTitles = [];
  const [navigationTitles, setNavigationTitles] = useState([]);
  const [subNavigationTitles, setSubNavigationTitles] = useState([]);

  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState("navbar")

  const [mysticTopics, setMysticTopics] = useState();
  const [yogaTopics, setYogaTopics] = useState();
  const [travelTopics, setTravelTopics] = useState();


  const clickNavAway = () => {
    setVisible(false);
  };

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
    console.log(window.scrollY);
    if (window.scrollY < 100) {
      return setHeader("navbar")
    } else if (window.scrollY > 100) {
      return setHeader("navbar2")
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <div className={`${header}`}>
      <div className="wrapper">
      <ClickOutside onClick={clickNavAway} className={'click-outside-wrapper'}>
        <div className={`${componentName}__wrapper`}>
          <div className={`${componentName}__nav-items`}>
            <Link to="/" className={`${componentName}__logo`}>LOGO</Link>
            {navigationTitles.map((item) => {
              return (
                <Link
                  className={`${componentName}__nav-items-cta`}
                  key={item.id}
                  to={item.slug}
                  onClick={() => selectNavTitle(item.id)}
                  onMouseEnter={() => selectNavTitle(item.id)}
                  >
                  {item.title}
                </Link>
              );
            })}
            <Link to="/about" className={`${componentName}__nav-items-cta`}>
              About Me
            </Link>
            <a target="_blank" rel="noopener noreferrer" href="">
              <FontAwesomeIcon icon={faInstagram} className="icon__instagram"/>
            </a>
          </div>
          {subNavigationTitles &&
            <div className={`${componentName}__nav-items-sub-menu ${visible ? '' : 'is--hidden'}`}>
              {subNavigationTitles.map((item) => {
                return (
                  <Link
                    key={item.id}
                    className={`${componentName}__nav-items-cta`}
                    to={item.slug}>
                    {item.title}
                  </Link>
                );
              })}
            </div>
          }
        </div>
      </ClickOutside>
      </div>
    </div>
  );
};

export default Navbar;
