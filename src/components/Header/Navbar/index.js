import React, { useEffect, useState } from "react";
import "../../../scss/index.scss";
import { Link } from "gatsby";
import Dropdown from "../../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import PrintServices from '../../../services/PrintServices';

const Navbar = () => {
  const componentName = 'navbar';
  const [navigationItemOne, setNavigationItemOne] = useState({});
  const [navigationItemTwo, setNavigationItemTwo] = useState({});
  const [navigationItemThree, setNavigationItemThree] = useState({});

  const [mysticTopics, setMysticTopics] = useState();
  const [yogaTopics, setYogaTopics] = useState();
  const [travelTopics, setTravelTopics] = useState();

  useEffect(() => {
    const fetchFirstLevel = async () => {
      return PrintServices.getCategoryItemsOne();
    }

    const fetchMysticLevel = async () => {
      return PrintServices.getMysticCategories();
    }

    fetchFirstLevel().then(value => {
      value.data.categoryItemCollection.items.map((item, index) => {
        const firstLevelData = {
          id: item.id,
          title: item.title,
          slug: item.slug
        };
        if (index === 0) {
          setNavigationItemOne (firstLevelData);
        } else if (index === 1) {
          setNavigationItemTwo (firstLevelData);
        } else if (index === 2){
          setNavigationItemThree(firstLevelData);
        }
      });
    })

    fetchMysticLevel().then(value => {
      // console.log(value.data.categoryItemCollection.items)
      setMysticTopics(value.data.categoryItemCollection.items);
    })
  }, [mysticTopics]);

  // console.log(mysticTopics)

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar__wrapper">
          <Link to="/" activeClassName="navbar__link-active" className="navbar__links">LOGO</Link>
          <div className="navbar-right">
            <Dropdown title={"title"} subtitles={mysticTopics}/>
            <Link activeClassName="navbar__link-active" to={navigationItemThree.slug} key={navigationItemThree.id} className="navbar__links is--link">{navigationItemThree.title}</Link>
            <Link activeClassName="navbar__link-active" to={navigationItemTwo.slug} key={navigationItemTwo.id} className="navbar__links is--link">{navigationItemTwo.title}</Link>
            <Link activeClassName="navbar__link-active" to={navigationItemOne.slug} key={navigationItemOne.id} className="navbar__links is--link">{navigationItemOne.title}</Link>
            <Link activeClassName="navbar__link-active" to="/about" className="navbar__links">About Me</Link>
            <a
            target="_blank"
            rel="noopener noreferrer"
            href="">
              <FontAwesomeIcon icon={faInstagram} className="icon__instagram"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
