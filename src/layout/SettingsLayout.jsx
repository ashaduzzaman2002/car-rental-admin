import { Button, Img, Line, Text } from "components";
import { SettingsMenuItems } from "constants/SidebarItem";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SettingsLayout = ({ children, sideProfile }) => {
  const { pathname } = window.location;
  const [active, setActive] = useState(pathname);

  useEffect(() => {
    if (pathname.includes("/setting/profile")) {
      setActive("/setting/profile");
    } else {
      setActive(pathname);
    }
  }, [pathname]);

  return (
    <>
      <div className="bg-blue-300 flex flex-col items-start justify-start mx-auto p-[77px] md:px-10 sm:px-5 rounded-tl-[15px] rounded-tr-[15px] w-full">
        <Text
          className="mb-[78px] ml-0.5 md:ml-[0] sm:text-[35px] md:text-[41px] text-[45px] text-white-A700"
          size="txtPromptSemiBold45"
        >
          Account Setting
        </Text>
      </div>
      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[-87px] mx-auto px-10 sm:px-5 rounded-[15px] w-[90%] z-[1]">
        <div
          className={`flex flex-col gap-5 items-start justify-start md:mt-0 mt-10 w-auto`}
        >
          {sideProfile && (
            <div
              className={`flex flex-col gap-5 items-center justify-start w-auto`}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[202px] items-center justify-start p-[26px] sm:px-5 w-[202px]"
                style={{
                  backgroundImage: "url('/images/img_group33962.png')",
                }}
              >
                <Img
                  className="h-[148px] md:h-auto object-cover w-[148px]"
                  src="/images/img_295.png"
                  alt="TwoHundredNinetyFive"
                />
              </div>
              <Text
                className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
                size="txtPromptMedium22"
              >
                Jakob Levin
              </Text>
            </div>
          )}
          <div className="flex flex-col gap-[15px] items-start justify-start md:mt-0 mt-[39px] w-auto">
            <Text
              className="text-gray-800 text-xl w-auto"
              size="txtPromptMedium20Gray800"
            >
              Menu
            </Text>
            <div className="flex flex-col gap-[15px] items-start justify-start w-auto">
              {SettingsMenuItems?.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-start w-auto"
                >
                  <div className="flex flex-col items-center justify-start w-full">
                    <Link
                      to={item.path}
                      className="flex flex-row gap-3 items-center justify-start w-auto"
                    >
                      <div
                        className={`  ${
                          active === item.path ? "bg-[#EDF4FE]" : "bg-[#F9F8F9]"
                        } flex flex-col h-11 items-center justify-start p-2.5 rounded-[14px] w-11`}
                      >
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                          {item.icon(active === item.path)}
                        </div>
                      </div>
                      <Text
                        className={`text-base ${
                          active === item.path
                            ? "text-blue-300"
                            : "text-[#3A3A3A]"
                        } w-auto`}
                        size="txtPromptMedium16Blue300"
                      >
                        {item.name}
                      </Text>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Line className="bg-gray-100_04 h-[740px] md:h-px ml-10 md:ml-[0] md:w-full w-px" />
        {children}
      </div>
    </>
  );
};

export default SettingsLayout;
