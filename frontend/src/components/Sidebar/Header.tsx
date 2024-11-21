import { useState } from "react";
import { MenuIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

import NewRecordModal from "../Modal/NewRecordModal";
import { LogoutIcon, SearchIcon } from "./Icons";
import SetPermissionsModal from "../Modal/SetPermissionsModal";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { data } from "./constant";
import SidebarItem from "./SidebarItem";

const Header = () => {
  const { pathname } = useLocation();

  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [isPermissionsOpen, setIsPermissionsOpen] = useState(false);

  const openRecordModal = () => setIsRecordOpen(true);
  const closeRecordModal = () => setIsRecordOpen(false);

  const openPermissionsModal = () => setIsPermissionsOpen(true);
  const closePermissionsModal = () => setIsPermissionsOpen(false);

  return (
    <>
      <div className="flex items-center justify-between lg:hidden mb-4">
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/images/logo.webp" alt="" className="h-12 " />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden text-black"
            >
              <MenuIcon className="h-4 w-4 sm:h-6 sm:w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="text-[#878787] font-poppins px-4 bg-[#1b1b1b] text-center"
          >
            <SheetTitle>
              <VisuallyHidden.Root>Navbar</VisuallyHidden.Root>
            </SheetTitle>
            <SheetDescription>
              <VisuallyHidden.Root>Mobile Navbar</VisuallyHidden.Root>
            </SheetDescription>
            <div className="grid gap-3 py-4 mt-6">
              {data.map((item) => (
                <SheetTrigger asChild key={item.title}>
                  <SidebarItem
                    icon={item.icon}
                    activeIcon={item.activeIcon}
                    label={item.title}
                    link={item.link}
                    active={pathname === item.link}
                  />
                </SheetTrigger>
              ))}
              <div className="mt-10">
                <SidebarItem icon={<LogoutIcon />} label="Log Out" link="/" />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <header className="mb-6">
        <div className="flex justify-between md:items-center flex-col gap-2 md:flex-row">
          <div className="flex items-center bg-[#15192B] rounded-lg p-2 w-1/2">
            <SearchIcon className="text-gray-400 mx-2" />
            <input
              type="text"
              placeholder="Search Health Records..."
              className="bg-transparent outline-none flex-1 text-gray-400"
            />
          </div>

          <div className="flex md:items-center flex-col gap-2 md:flex-row">
            <button
              className="px-6 py-2 border border-green-400 bg-green-400 text-black rounded-md text-sm font-medium hover:bg-green-500"
              onClick={openRecordModal}
            >
              Add Record
            </button>
            <button
              className="px-4 py-2 border border-green-400 text-green-400 rounded-md text-sm font-medium hover:bg-green-400 hover:text-black"
              onClick={openPermissionsModal}
            >
              Set Permissions
            </button>
          </div>
        </div>
      </header>
      <NewRecordModal closeModal={closeRecordModal} isOpen={isRecordOpen} />
      <SetPermissionsModal
        closeModal={closePermissionsModal}
        isOpen={isPermissionsOpen}
      />
    </>
  );
};

export default Header;
