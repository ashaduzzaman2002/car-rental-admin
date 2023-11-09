import React from "react";

import { Button, Img, Line, Text } from "components";
import Layout from "layout/Layout";
import SettingsLayout from "layout/SettingsLayout";
import { MdEdit } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

const SettingProfilePage = () => {
  return (
    <Layout>
      <SettingsLayout>
      <div className="flex flex-col gap-10 items-center justify-start md:ml-[0] ml-[39px] md:mt-0 mt-[38px] w-auto md:w-full">
          <div className="flex flex-row sm:gap-10 gap-[497px] items-center justify-between w-auto md:w-full">
            <Text
              className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800 w-auto"
              size="txtPromptSemiBold35"
            >
              Profile
            </Text>
            <Button
              className="flex h-9 items-center justify-center outline outline-[1px] outline-white-A700 rounded-[50%] w-9"
              shape="circle"
              color="gray_100_05"
              size="sm"
              variant="fill"
            >
              <MdEdit />
            </Button>
          </div>
          <div className="bg-white-A700 border border-gray-100_04 border-solid flex flex-col items-start justify-start rounded-[15px] w-auto">
            <div className="flex flex-col gap-[25px] items-start justify-start w-auto">
              <div className="flex flex-col gap-5 items-center justify-start w-auto">
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[100px] items-center justify-start p-[13px] w-[100px]"
                    style={{
                      backgroundImage: "url('/images/img_group33962.png')",
                    }}
                  >
                    <Img
                      className="h-[73px] md:h-auto object-cover w-[73px]"
                      src="/images/img_295.png"
                      alt="TwoHundredNinetyFive"
                    />
                  </div>
                  <Text
                    className="text-gray-800 text-lg w-auto"
                    size="txtPromptMedium18Gray800"
                  >
                    Jakob Levin
                  </Text>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group34360.svg')",
                    }}
                  >
                    <Text
                      className="ml-0.5 md:ml-[0] text-[15px] text-gray-400_01"
                      size="txtPromptRegular15"
                    >
                      First Name
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group34360.svg')",
                    }}
                  >
                    <Text
                      className="ml-0.5 md:ml-[0] text-[15px] text-gray-400_01"
                      size="txtPromptRegular15"
                    >
                      Last Name
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group34360.svg')",
                    }}
                  >
                    <Text
                      className="ml-0.5 md:ml-[0] text-[15px] text-gray-400_01"
                      size="txtPromptRegular15"
                    >
                      Email Address
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group34360.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-400_01"
                          size="txtPromptRegular15"
                        >
                          +91
                        </Text>
                       <BsChevronDown />
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-auto">
                        <Line className="bg-gray-500_6c h-[23px] w-px" />
                        <Text
                          className="text-[15px] text-gray-400_01 w-auto"
                          size="txtPromptRegular15"
                        >
                          0000 0000 00
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] rounded-[15px] text-center text-lg w-[294px]"
                color="blue_300_87"
                size="sm"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </SettingsLayout>
    </Layout>
  );
};

export default SettingProfilePage;
