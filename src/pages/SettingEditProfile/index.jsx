import React from "react";
import { Button, Img, Line,  Text } from "components"
import Layout from "layout/Layout";
import { BsChevronDown, BsFillCameraFill } from "react-icons/bs";
import SettingsLayout from "layout/SettingsLayout";

const SettingEditProfilePage = () => {
  return (
    <Layout>
      <SettingsLayout>
        <div className="flex flex-col gap-[41px] justify-start md:ml-[0] ml-[39px] md:mt-0 mt-[38px] w-[64%] md:w-full">
          <Text
            className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
            size="txtPromptSemiBold35"
          >
            Edit Profile
          </Text>
          <div className="bg-white-A700 border border-gray-100_04 border-solid flex flex-col items-center justify-start md:ml-[0] ml-[154px] p-5 rounded-[15px] w-[69%] md:w-full">
            <div className="flex flex-col gap-[25px] items-start justify-start my-2.5 w-auto">
              <div className="flex flex-col gap-5 items-center justify-start w-auto">
                <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                  <div className="h-[100px] md:h-[99px] relative w-[101px]">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] w-[100px]"
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
                    <Button
                      className="absolute bottom-[3%] flex h-[30px] items-center justify-center right-[0] rounded-[50%] w-[30px]"
                      shape="circle"
                      color="blue_50"
                      size="xs"
                      variant="fill"
                    >
                     <BsFillCameraFill />
                    </Button>
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
                      className="ml-0.5 md:ml-[0] text-[15px] text-gray-800"
                      size="txtPromptRegular15Gray800"
                    >
                      Jakob
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group34360.svg')",
                    }}
                  >
                    <Text
                      className="ml-0.5 md:ml-[0] text-[15px] text-gray-800"
                      size="txtPromptRegular15Gray800"
                    >
                      Levin
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-4 w-full"
                    style={{
                      backgroundImage: "url('images/img_group34360.svg')",
                    }}
                  >
                    <Text
                      className="md:ml-[0] ml-[3px] mt-1 text-[15px] text-gray-800"
                      size="txtPromptRegular15Gray800"
                    >
                      JakobLevin@gmail.com
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-end p-[17px] w-full"
                    style={{
                      backgroundImage: "url('/images/img_group34360.svg')",
                    }}
                  >
                    <div className="flex flex-row gap-3 items-start justify-start ml-0.5 md:ml-[0] w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Text
                          className="text-[15px] text-gray-800"
                          size="txtPromptRegular15Gray800"
                        >
                          +91
                        </Text>

                        <BsChevronDown />
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start w-auto">
                        <Line className="bg-gray-800_6c h-[23px] w-px" />
                        <Text
                          className="text-[15px] text-gray-800 w-auto"
                          size="txtPromptRegular15Gray800"
                        >
                          1234 5678 90
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium leading-[normal] rounded-[15px] text-center text-lg w-[294px]"
                color="blue_300"
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

export default SettingEditProfilePage;
