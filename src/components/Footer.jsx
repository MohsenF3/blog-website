// icons
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaRegCopyright,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 sm:px-16 px-5  py-12">
      <div>
        <div className="grid sm:grid-cols-3 gap-5 grid-cols-1 border-b border-gray-500 pb-7">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 col-span-2">
            {/* category 1 */}
            <div>
              <span className="text-white block mb-2">Category</span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Games
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Refrences
                  </a>
                </li>
              </ul>
            </div>
            {/* category 2 */}
            <div>
              <span className="text-white block mb-2">Appels</span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Web
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    eCommerce
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    buisness
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Entertainment
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            {/* category 3 */}
            <div>
              <span className="text-white block mb-2">Cherry</span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Brochure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Nonprofit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Education
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* category 4 */}
            <div>
              <span className="text-white block mb-2">Buisness</span>
              <ul>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    information
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Personal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Wiki
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 inline-block mb-1 hover:text-orange-500"
                  >
                    Form
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-white">
            <span className="text-white font-medium">
              Subscribe for updates
            </span>
            <form className="flex  flex-col md:flex-row items-center gap-5 sm:gap-2 ">
              <input
                type="email"
                placeholder="Email"
                className="p-2 max-md:w-full flex-grow shadow-md outline-none rounded-sm text-gray-600 border-2 border-gray-400 focus:border-purple-500"
              />
              <button
                type="submit"
                className=" max-md:w-full border-2 py-2 px-3 hover:bg-orange-500 hover:border-orange-500 duration-150 transition-colors shadow-md rounded-sm"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
              cupiditate cum quasi, nam adipisci iure!
            </p>
          </div>
        </div>

        <div className="pt-7 flex items-center justify-between text-gray-500">
          <span className="flex items-center gap-2">
            <FaRegCopyright /> Copyright 2023 Mohsen. All Right reserved
          </span>

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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
