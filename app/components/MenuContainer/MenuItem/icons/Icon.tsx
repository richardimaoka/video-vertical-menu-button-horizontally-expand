import React, { JSX } from "react";
import { IconType } from "./iconTypes";
import { ToolsIcon } from "./ToolsIcon";
import { ProfileIcon } from "./ProfileIcon";
import { SettingsIcon } from "./SettingsIcon";
import { TasksIcon } from "./TasksIcon";
import { PropertiesIcon } from "./PropertiesIcon";

interface IconProps {
  iconType: IconType;
}

export default function Icon({ iconType }: IconProps): JSX.Element {
  switch (iconType) {
    case "tools":
      return <ToolsIcon />;
    case "profile":
      return <ProfileIcon />;
    case "settings":
      return <SettingsIcon />;
    case "tasks":
      return <TasksIcon />;
    case "properties":
      return <PropertiesIcon />;
  }
}
