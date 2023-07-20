import React, { useEffect, useState } from "react";
import "../../scss/index.scss";

const Dropdown = ({ title, subtitles }) => {

  const [open, setOpen] = useState(false);
  const [subTitles, setSubTitles] = useState([]);

  const titleArray = [];

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenu = () => {
    // do something
    setOpen(false);
  };

  useEffect(() => {
    subtitles && subtitles.map((item, index) => {
      const secondLevelData = {
        id: item.id,
        title: item.title,
        slug: item.slug
      };
      titleArray.push(secondLevelData);
    });

    const arrayDataItems = titleArray.reverse().map(item =>
      <li key={item.id}>
        <p>{item.title}</p>
        <span>{item.slug}</span>
      </li>
    )

    setSubTitles(arrayDataItems);
  }, [subtitles]);

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>{title}</button>
      {open ? (
        <ul className="menu">
          {subTitles}
        </ul>
      ) : null}
      {open ? <div>Is Open</div> : <div>Is Closed</div>}
    </div>
  );
};

export default Dropdown;
