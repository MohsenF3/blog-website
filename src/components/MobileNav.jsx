import { NavLink } from "react-router-dom";

const MobileNav = ({ openNav, navItems, handleOpenNav }) => (
  <div>
    <ul
      className={` fixed z-50 w-full h-full transition-all duration-200 ease-in-out right-0 top-5 md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white font-medium ${
        openNav ? "translate-x-0" : " translate-x-full"
      }`}
    >
      {navItems.map(({ id, path, link }) => (
        <li key={id}>
          <NavLink
            className={({ isActive }) =>
              `hover:text-orange-500 hover:border-b-2 transition duration-150 ease-in-out text-black ${
                isActive && "text-orange-500 border-b-2"
              }`
            }
            to={path}
            onClick={handleOpenNav}
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default MobileNav;
