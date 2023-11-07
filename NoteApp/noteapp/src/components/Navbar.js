import React, { Fragment, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NoteContext from "../context/notes/noteContext";
import logo from "../images/logo-1.png";

var user = {
  name: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).name
    : "myname",
  email: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).email
    : "myemail.com",
  imageUrl:
    "  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe0Hsu8YYt0Gi6ZxY-aPkV7Os7abmxProPNg&usqp=CAU",
};

const userNavigation = [
  { name: "Profile" },
  { name: localStorage.getItem("token") ? "Signout" : "Login" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const context = useContext(NoteContext);
  const { userLogin, setUserLogin } = context;
  let location = useLocation();
  useEffect(() => {}, [location]);
  const navigate = useNavigate();
  
  useEffect(() => {
    setUserLogin(localStorage.getItem("token") ? true : false);
  }, []);
  const handleclick = (e) => {
    if (e === "Signout") {
      localStorage.removeItem("token");
      navigate("/login");
      setUserLogin(false);
    }
    if (e === "Profile") {
      navigate("/profile");
    }
  };
  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      current: location.pathname === "/" ? true : false,
    },
    {
      name: "Add Note",
      href: "/addnote",
      current: location.pathname === "/addnote" ? true : false,
    },
  ];

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) =>
            userLogin === true ? (
              <>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  {/* medium device navbar */}
                  <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                      {/* logo */}
                      <div className="flex-shrink-0">
                        <Link to="/">
                          <img
                            className="h-8 w-32"
                            src={logo}
                            alt="Your Company"
                          />
                        </Link>
                      </div>
                      {/* pages links */}
                      <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={classNames(
                                item.current
                                  ? "bg-gray-900 text-white"
                                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                "rounded-md px-3 py-2 text-sm font-medium"
                              )}
                              aria-current={item.current ? "page" : undefined}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* medium device menu */}
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        {/* Profile dropdown for medium devaise */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src={user.imageUrl}
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            {/* singout, setting */}
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <button
                                      key={item.name}
                                      onClick={() => {
                                        handleclick(item.name);
                                      }}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="-mr-2 flex md:hidden">
                      <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <Bars3Icon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                  </div>
                </div>
                {/* // Mobile device navbar */}
                <Disclosure.Panel className="md:hidden">
                  {/* page links */}
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as={Link}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block rounded-md px-3 py-2 text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  {/* user details */}
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium leading-none text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium leading-none text-gray-400">
                          {user.email}
                        </div>
                      </div>
                    </div>
                    {/* singout, profails */}
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            handleclick(item.name);
                          }}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            ) : (
              <>
                <div className="min-h-full">
                  <Disclosure as="nav" className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="flex items-center p-4">
                        {/* logo */}
                        <Link to="/">
                          <img
                            className="h-8 w-32"
                            src={logo}
                            alt="Your Company"
                          />
                        </Link>
                      </div>
                    </div>
                  </Disclosure>
                </div>
              </>
            )
          }
        </Disclosure>
      </div>
    </>
  );
}
