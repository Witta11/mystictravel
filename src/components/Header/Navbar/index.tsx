import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "../../../scss/index.scss";

interface BlogPost {
  id: string;
  title: string;
  category: string[];
  slug: string;
}

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const componentName = 'navbar';
  const [isOpen, setIsOpen] = useState<boolean | string>(false);
  const [header, setHeader] = useState<string>("navbar");
  const [iconDirection, setIconDirection] = useState(faChevronDown);

  // Use the useStaticQuery hook to fetch data at build time
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      allContentfulBlogPost {
        nodes {
          id
          title
          category
          slug
        }
      }
    }
  `);

  // This structure assumes categories are top-level links in the navbar
  const categories: { [key: string]: BlogPost[] } = data.allContentfulBlogPost.nodes.reduce((acc, node) => {
    const category = node.category[0]; // assuming first category defines the navbar section
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(node);
    return acc;
  }, {});

  // Function to toggle dropdowns (assuming categories are used to group dropdowns)
  const toggleDropdown = (category: string) => {
    setIsOpen(!isOpen && category);
  };

  // Scroll event listener for changing header state
  const listenScrollEvent = () => {
    if (window.scrollY < 70) {
      setHeader("navbar");
    } else {
      setHeader("navbar2");
    }
  };

  // Add and remove the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  // Handling responsive navbar toggle
  const setIcon = () => {
    // This function should toggle the navbar's responsive state and icon
  };

  return (
    <div className="wrapper">
      <div className={header}>
        <div className={`${componentName}__topnav`} id="header__navbar">
          <Link to="/" className={`${componentName}__logo`}>LOGO</Link>
          {Object.keys(categories).map((categoryName, index) => (
            <div className="dropdown" key={categoryName}>
              <button
                className={`${componentName}__drop-cta`}
                onClick={() => toggleDropdown(categoryName)}
              >
                {categoryName}
              </button>
              {isOpen && (
                <div className="dropdown-content">
                  {categories[categoryName].map((item) => (
                    <Link key={item.id} to={item.slug}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div>
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
    </div>
  );
};

export default Navbar;
