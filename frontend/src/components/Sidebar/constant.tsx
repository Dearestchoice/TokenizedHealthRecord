import {
  DashboardIcon,
  PermissionsIcon,
  RecordsIcon,
  SettingsIcon,
} from "./Icons";

export const data = [
  {
    icon: <DashboardIcon />,
    activeIcon: <DashboardIcon color="#000000" />,
    link: "/dashboard",
    title: "Dashboard",
  },
  {
    icon: <RecordsIcon />,
    activeIcon: <RecordsIcon color="#000000" />,
    link: "/records",
    title: "Records",
  },
  {
    activeIcon: <PermissionsIcon color="#000000" />,
    icon: <PermissionsIcon />,
    link: "/permissions",
    title: "Permissions",
  },
  {
    activeIcon: <SettingsIcon color="#000000" />,
    icon: <SettingsIcon />,
    link: "/settings",
    title: "Settings",
  },
];
