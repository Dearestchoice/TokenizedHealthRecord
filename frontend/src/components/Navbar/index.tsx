import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-2 items-center justify-between px-4 sm:px-6 lg:px-8 py-2 md:py-4">
      <Link to={"/"} className="flex items-center gap-2">
        <img src="/images/logo.webp" alt="" className="h-12 " />
      </Link>
    </nav>
  );
};

export default Navbar;
