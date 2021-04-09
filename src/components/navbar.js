import React, { useRef, useState } from "react";
import Toggle from "../components/toggle";
import useOnClickOutside from "../hooks/useOnClickOutside";
import Logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const ref = useRef();
  const [profileMenueOpen, setProfileMenueOpen] = useState(false);
  const [mobuleMenue, setMobileMenue] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useOnClickOutside(ref, () => setProfileMenueOpen(false));
  useOnClickOutside(ref, () => setMobileMenue(false));

  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav dir="rtl" className="bg-secondary shadow-md">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
              {/* Mobile menu button*/}
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setMobileMenue(!mobuleMenue)}
              >
                <span className="sr-only">Open main menu</span>
                {/*
      Icon when menu is closed.

      Heroicon name: outline/menu

      Menu open: "hidden", Menu closed: "block"
    */}
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/*
      Icon when menu is open.

      Heroicon name: outline/x

      Menu open: "block", Menu closed: "hidden"
    */}
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
              <div className="flex-shrink-0 flex items-center ml-3">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block md:ml-6">
                <div className="flex space-x-4">
                  {/* Current: "bg-primary text-primary", Default: "text-secondary hover:bg-primary hover:text-primary" */}
                  <NavLink
                    to="/Dashboard"
                    className=" text-primary hover:bg-primary hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                    activeClassName="bg-primary"
                  >
                    الرئيسية
                  </NavLink>
                  <NavLink
                    to="/Team"
                    className="text-secondary hover:bg-primary hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-primary"
                  >
                    الخدمات
                  </NavLink>
                  <NavLink
                    to="/Projects"
                    className="text-secondary hover:bg-primary hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-primary"
                  >
                    إستكشف
                  </NavLink>
                  <NavLink
                    to="/Calendar"
                    className="text-secondary hover:bg-primary hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    activeClassName="bg-primary"
                  >
                    حول
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
              <Toggle />
              {isLoggedIn === false && (
                <div className="hidden md:block sm:ml-6">
                  <div className="flex space-x-4">
                    <NavLink
                      to="/Team"
                      className="text-secondary hover:bg-primary hover:text-primary px-3 py-2 rounded-md text-sm font-medium mr-3"
                    >
                      التسجيل
                    </NavLink>
                    <NavLink
                      to="/Team"
                      className="text-secondary hover:bg-primary hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    >
                      الدخول
                    </NavLink>
                  </div>
                </div>
              )}
              {/* Profile dropdown */}
              {isLoggedIn !== false && (
                <div className="mr-3 relative">
                  <div>
                    <button
                      type="button"
                      className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      id="user-menu"
                      aria-expanded="false"
                      aria-haspopup="true"
                      onClick={() => setProfileMenueOpen(true)}
                    >
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="logo"
                      />
                    </button>
                  </div>
                  {/*
      Dropdown menu, show/hide based on menu state.

      Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95"
    */}
                  {profileMenueOpen && (
                    <div
                      ref={ref}
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <NavLink
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        الملف الشخصي
                      </NavLink>
                      <NavLink
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        الاعدادات
                      </NavLink>
                      <NavLink
                        to="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        تسجيل الخروج
                      </NavLink>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}
        {mobuleMenue && (
          <div ref={ref} className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-primary text-primary", Default: "text-secondary hover:bg-primary hover:text-primary" */}
              <NavLink
                to="/Dashboard"
                className=" text-primary hover:bg-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                aria-current="page"
                activeClassName="bg-primary"
              >
                ألرئيسية
              </NavLink>
              <NavLink
                to="/Team"
                className="text-secondary hover:bg-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-primary"
              >
                Team
              </NavLink>
              <NavLink
                to="/Projects"
                className="text-secondary hover:bg-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-primary"
              >
                Projects
              </NavLink>
              <NavLink
                to="/Calendar"
                className="text-secondary hover:bg-primary hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                activeClassName="bg-primary"
              >
                Calendar
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
