import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import LoginComponent from "./LoginComponent";

// icons
import { FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa6";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleOpenNav = () => setOpenNav(!openNav);
  const navItems = [
    { id: 1, path: "/", link: "Home" },
    { id: 2, path: "/services", link: "Services" },
    { id: 3, path: "/about", link: "About" },
    { id: 4, path: "/blogs", link: "Blogs" },
    { id: 5, path: "/contact", link: "Contact" },
  ];

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const openModal = () => {
    setIsOpenModal(true);
  };

  return (
    <header className="bg-black text-white relative">
      <nav className="px-4 py-5 flex items-center justify-between  mx-auto ">
        {/*  logo */}

        <Link className=" font-bold text-xl" to="/">
          My <span className="  text-orange-500">Blog</span>
        </Link>

        {/* page links */}

        <ul className=" md:flex hidden gap-10 font-medium">
          {navItems.map(({ id, path, link }) => (
            <li key={id}>
              <NavLink
                className={({ isActive }) =>
                  `hover:text-orange-500 hover:border-b-2 transition duration-150 ease-in-out text-lg ${
                    isActive && " text-orange-500 border-b-2"
                  }`
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* menu icons */}

        <div className="md:flex items-center gap-4 hidden">
          <a href="/" className=" text-xl hover:text-orange-500">
            <FaInstagram />
          </a>
          <a href="/" className=" text-xl hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className=" text-xl hover:text-orange-500">
            <FaTwitter />
          </a>
          <button
            onClick={openModal}
            className=" bg-orange-500 px-5 py-1 rounded-sm font-bold hover:bg-orange-600"
          >
            Log In
          </button>
        </div>

        {/* our modal component */}

        <LoginComponent onClose={closeModal} isOpen={isOpenModal} />

        {/* mobile menu btn */}

        <div className="block md:hidden">
          <button onClick={handleOpenNav}>
            {openNav ? (
              <IoIosClose className="w-8 h-8" />
            ) : (
              <HiBars3BottomRight className="w-8 h-8" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile devices */}

      <MobileNav
        openNav={openNav}
        navItems={navItems}
        handleOpenNav={handleOpenNav}
      />
    </header>
  );
};

export default Navbar;
