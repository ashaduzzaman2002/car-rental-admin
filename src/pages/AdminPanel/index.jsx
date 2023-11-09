import React from "react";

import { Button, Img, Text } from "components";
import { Table } from "@radix-ui/themes";
import { MembersTableData, MembersTableHeader } from "constants/Tables";
import {
  BsFillCarFrontFill,
  BsFillPersonFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { BiSolidReport, BiTrip } from "react-icons/bi";
import { Link } from "react-router-dom";
import MemberTable from "components/table/MemberTable";
import Layout from "layout/Layout";
import { Car, CarBooking, Trip } from "assets/svg/Icons";
import { performance } from "constants/data";

const AdminPanelPage = () => {
  return (
    <Layout bg="#fff">
      <div className="flex flex-col gap-5 items-center justify-start w-[97%] md:w-full">
        <div className="bg-white-A700 border border-gray-100 border-solid flex md:flex-col flex-row gap-[29px] items-center justify-start rounded-[15px] w-full">
          <Img
            className="h-[215px]"
            src="/images/img_group46.svg"
            alt="groupFortySix"
          />
          <div className="flex md:flex-1 flex-col gap-5 items-start justify-start w-auto md:w-full">
            <Text
              className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
              size="txtPromptMedium22"
            >
              Live Performance
            </Text>
            <div className="gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-auto md:w-full">
              {performance.map((item, i) => (
                <div
                  key={i}
                  className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-start justify-end p-[9px] rounded-[15px] w-full min-w-[250px]"
                >
                  <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[5px] w-auto">
                    <Button
                      className="flex h-11 items-center justify-center w-11"
                      shape="circle"
                      color={item.color}
                      size="sm"
                      variant="fill"
                    >
                      {<item.icon className="text-[#03C2EB] text-2xl" />}
                    </Button>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-gray-700 text-sm w-auto"
                        size="txtPromptRegular14"
                      >
                        {item.title}
                      </Text>
                      <Text
                        className="text-gray-800 text-lg w-auto"
                        size="txtPromptSemiBold18"
                      >
                        {item.count}
                      </Text>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <MemberTable data={MembersTableData.slice(0, 4)} viewAll={true} />

        <div className="bg-gray-50_02 flex flex-col items-center justify-start rounded-[15px] w-full">
          <div className="h-[325px] md:h-[333px] relative rounded-[15px] w-full">
            <Img
              className="h-[325px] m-auto object-cover rounded-[15px] w-full"
              src="images/img_maps.png"
              alt="maps"
            />
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] justify-start mx-auto w-[97%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <Img
                  className="h-10 md:mt-0 mt-[35px] w-10"
                  src="images/img_car.svg"
                  alt="car"
                />
                <Img
                  className="h-[35px] md:ml-[0] ml-[533px] w-[35px]"
                  src="images/img_car_gray_800.svg"
                  alt="car_One"
                />
                <Img
                  className="h-9 md:ml-[0] ml-[438px] md:mt-0 mt-9 w-9"
                  src="images/img_car_gray_800_36x36.svg"
                  alt="car_Two"
                />
              </div>
              <Img
                className="h-[34px] md:ml-[0] ml-[855px] mt-[87px] w-[34px]"
                src="images/img_car_gray_800_34x34.svg"
                alt="car_Three"
              />
              <Img
                className="h-[34px] md:ml-[0] ml-[548px] mt-[27px] w-[34px]"
                src="images/img_car_gray_800_34x34.svg"
                alt="car_Four"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminPanelPage;
