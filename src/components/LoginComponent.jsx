import { useEffect } from "react";

const LoginComponent = ({ onClose, isOpen }) => {
  return (
    <div
      className={`fixed bg-black bg-opacity-75 inset-0 flex items-center justify-center transition-all duration-100 ease-in-out ${
        isOpen ? "" : " hidden "
      }`}
    >
      <div className="bg-white text-black w-full md:w-1/2 lg:w-1/3 p-8 rounded-lg relative z-20">
        <div className="flex justify-end mb-6">
          <button onClick={onClose}>Close</button>
        </div>

        <h1 className="text-center text-2xl ">Login</h1>

        <form className="pt-6 pb-2 my-2">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 "
              id="email"
              type="text"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  mb-3"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="block md:flex items-center justify-between">
            <div>
              <button
                className="bg-green-500  text-white font-bold py-2 px-4 rounded border-b-4 border-green-200"
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
