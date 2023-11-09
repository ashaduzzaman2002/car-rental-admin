import React, { useEffect, useState } from "react";

import { Sidebar } from "react-pro-sidebar";

import { Img, Line, Text } from "components";
import Header from "components/header/Header";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MenuItems } from "constants/SidebarItem";

const Layout = ({ children, bg }) => {
  const { pathname } = window.location;
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    if (pathname.includes('/setting')) {
      setActive('/setting');
    } else {
      setActive(pathname);
    }
  }, [pathname]);
  return (
    <div
      className={`${
        bg ? "bg-[#fff]" : "bg-gray-100_02"
      } flex flex-col font-prompt items-center justify-start mx-auto w-full`}
    >
      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
        <Sidebar className="!sticky !w-[275px] bg-gray-50_02 flex h-[100vh] overflow-hidden md:hidden justify-start md:px-5 top-[0]">
          {/* Side bar logo */}
          <Link to={'/'} className="flex flex-row gap-[15px] items-center justify-start ml-5 md:ml-[0] mr-[76px] mt-[29px] w-auto">
            <Img
              className="h-[27px] w-[61px]"
              src="/images/img_ticket.svg"
              alt="ticket"
            />
            <Text
              className="text-blue_gray-900 text-center text-xl w-auto"
              size="txtPromptMedium20"
            >
              <span className="text-blue_gray-900 font-prompt font-medium">
                Car{" "}
              </span>
              <span className="text-blue-300 font-prompt font-semibold">
                Rental
              </span>
            </Text>
          </Link>

          {/* sidebar items */}
          <div className="flex h-full flex-col gap-[15px] items-start justify-between ml-5 md:ml-[0] mt-[57px] w-auto">
            {/* Side bar menu */}
            <div className="flex flex-col gap-[15px] items-start justify-start w-full">
              {MenuItems?.map((item, i) => (
                <SideBarItem item={item} key={i} active={active} />
              ))}
            </div>

            {/* Sidebar logout */}
            <div className="flex flex-row gap-[17px] items-center justify-start w-full mb-5">
              <div className="bg-deep_orange-50_83 cursor-pointer flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[93%]">
                <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[5px] w-auto">
                  <div className="bg-gray-200_79 flex flex-col h-11 items-center justify-center p-2.5 rounded-[14px] w-11">
                    <IoLogOut className="text-xl text-[#FF0000]" />
                  </div>
                  <Text
                    className="text-base text-red-A700 w-auto"
                    size="txtPromptMedium16Blue300"
                  >
                    Log Out
                  </Text>
                </div>
              </div>
              <Line className="bg-gray-100_03 h-[42px] rounded-bl-sm rounded-tl-sm w-[3px]" />
            </div>
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col gap-5 items-center justify-start md:px-5 w-full">
          <Header />

          <div className="w-[97%] md:w-full mb-5">
            {/* <MemberTable data={MembersTableData} /> */}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

const SideBarItem = ({ item, active }) => (
  <div
    key={item.name}
    className="flex flex-row gap-[17px] items-center justify-start w-full"
  >
    <div
      className={`${
        active === item.path && "bg-blue-50_99"
      } flex flex-col items-start justify-start p-2.5 rounded-[10px] w-[93%]`}
    >
      <Link
        to={item.path}
        className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[5px] w-auto"
      >
        <div
          className={`${
            active === item.path ? "bg-white-A700_a2" : "bg-[#EAE9EA]"
          } flex h-11 items-center justify-center rounded-[14px] w-11`}
        >
          {item.icon(active === item.path)}
        </div>
        <Text
          className={`text-base ${
            active === item.path ? "text-blue-300" : "text-[#3A3A3A]"
          } w-auto`}
          size="txtPromptMedium16Blue300"
        >
          {item.name}
        </Text>
      </Link>
    </div>
    <Line
      className={`${
        active === item.path && "bg-blue-300"
      } h-[42px] rounded-bl-sm rounded-tl-sm w-[3px]`}
    />
  </div>
);
