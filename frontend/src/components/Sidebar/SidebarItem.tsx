import { NavLink } from "react-router-dom";

// Reusable SidebarItem Component
interface SidebarItemProps {
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
  label: string;
  link?: string;
  active?: boolean;
}

const linkClass = ({ isActive }: { isActive: boolean }) => {
  const className = "flex items-center p-3 mb-3 rounded-lg cursor-pointer";
  return isActive
    ? className + " bg-[#3EE0AC] text-black"
    : className + " text-gray-400";
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  link,
  active,
  activeIcon
}) => {
  return (
    <NavLink to={link!} className={linkClass}>
      <span className="mr-3">{active ? activeIcon : icon}</span>
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;
