import React from "react";
import styles from "./MenuItem.module.css";
import Icon from "./icons/Icon";
import { IconType } from "./icons/iconTypes";

interface MenuItemProps {
  iconType: IconType;
  text: string;
}

export default function MenuItem({ iconType, text }: MenuItemProps) {
  return (
    <div className={styles.menuItem}>
      <div className={styles.iconContainer}>
        <Icon iconType={iconType} />
      </div>
      <span className={styles.menuText}>{text}</span>
    </div>
  );
}
