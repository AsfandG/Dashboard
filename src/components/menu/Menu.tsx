import React from "react";
import "./menu.scss";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="menu__item" key={item.id}>
          <span className="menu__title">{item.title}</span>
          {item.listItems.map((listitem) => (
            <Link href={listitem.url} className="menu__link" key={listitem.id}>
              {listitem.icon}
              <span className="menu__item--title">{listitem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
