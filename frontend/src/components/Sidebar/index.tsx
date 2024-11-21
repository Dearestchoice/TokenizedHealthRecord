import { Link, useLocation } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { LogoutIcon } from "./Icons";
import { data } from "./constant";

const SidebarComp = () => {
  const { pathname } = useLocation();
  return (
    <>
      <aside className="hidden w-1/5 max-h-svh bg-[#15192B] p-6 lg:flex flex-col items-center">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/images/logo.webp" alt="" className="h-12 " />
        </Link>

        <nav className="w-full pt-10">
          {data.map((item) => (
            <SidebarItem
              key={item.title}
              icon={item.icon}
              activeIcon={item.activeIcon}
              label={item.title}
              link={item.link}
              active={pathname === item.link}
            />
          ))}
        </nav>

        <div className="mt-auto w-full">
          <SidebarItem icon={<LogoutIcon />} label="Log Out" link="/" />
        </div>
      </aside>
    </>
  );
};

export default SidebarComp;
