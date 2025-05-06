import React from "react";
import styles from "./MenuContainer.module.css";
import MenuItem from "./menu-item/MenuItem";
import { IconType } from "./menu-item/icons/iconTypes";

// Define menu items data
const menuItems = [
  {
    iconType: "tools" as IconType,
    text: "Tools",
  },
  {
    iconType: "profile" as IconType,
    text: "Profile",
  },
  {
    iconType: "settings" as IconType,
    text: "Settings",
  },
  {
    iconType: "tasks" as IconType,
    text: "Tasks",
  },
  {
    iconType: "properties" as IconType,
    text: "Properties",
  },
];

export default function MenuContainer() {
  return (
    <div className={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <MenuItem key={index} iconType={item.iconType} text={item.text} />
      ))}
    </div>
  );
}
