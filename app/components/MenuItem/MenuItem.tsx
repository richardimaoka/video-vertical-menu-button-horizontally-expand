import React from "react";
import styles from "./MenuItem.module.css";
import Icon from "../Icon/Icon";

interface MenuItemProps {
  iconPaths: string[];
  text: string;
}

export default function MenuItem({ iconPaths, text }: MenuItemProps) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.iconContainer}>
        <Icon paths={iconPaths} />
      </div>
      <span className={styles.menuText}>{text}</span>
    </div>
  );
}
