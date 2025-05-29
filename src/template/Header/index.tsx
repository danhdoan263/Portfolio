import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";
import React, { useState, useCallback } from "react";

const menuItems = [
  {
    id: "title",
    text: "_danhdoan-263",
    className: styles.header__left__title,
    to: "/",
  },
  {
    id: "about",
    text: "_about-me",
    className: styles.header__left__about,
    to: "/about",
  },
  {
    id: "projects",
    text: "_projects",
    className: styles.header__left__projects,
    to: "/projects",
  },
  {
    id: "contact",
    text: "_contact",
    className: styles.header__contact,
    to: "/contact",
  },
];

export const HeaderIndex = React.memo(() => {
  const [activeItem, setActiveItem] = useState("title");

  const handleClick = useCallback((id: string) => {
    setActiveItem(id);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        {menuItems.slice(0, 3).map((item) => (
          <NavLink
            key={item.id}
            className={`${item.className} ${styles.items} ${
              activeItem === item.id ? styles.active : ""
            }`}
            to={item.to || "/"}
            onClick={() => handleClick(item.id)}
          >
            <p>{item.text}</p>
          </NavLink>
        ))}
      </div>

      <div
        className={`${styles.header__contact} ${styles.items} ${
          activeItem === "contact" ? styles.active : ""
        }`}
        onClick={() => handleClick("contact")}
      >
        <p>_contact</p>
      </div>
    </div>
  );
});
