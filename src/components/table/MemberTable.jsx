import { Table } from "@radix-ui/themes";
import { Button, Img, Text } from "components";
import { MembersTableHeader } from "constants/Tables";
import React from "react";
import { BiSolidReport } from "react-icons/bi";
import { BsTrash3Fill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MemberTable = ({ data, viewAll }) => {
  return (
    <div className="bg-white-A700 border border-gray-100 border-solid flex flex-col items-center justify-start px-5 rounded-[15px] w-full">
      <div className="flex flex-col gap-[15px] items-center justify-start mb-2.5 w-full">
        <div className=" flex flex-col gap-[13px] items-start justify-center p-2.5 w-full">
          <div className="flex flex-row md:gap-10 gap-[881px] items-center justify-between mt-2.5 w-full">
            <Text
              className="text-[22px] text-gray-800 sm:text-lg md:text-xl w-auto"
              size="txtPromptMedium22"
            >
              My Member
            </Text>

            {viewAll && (
              <Link
                to="/mymember"
                className="text-gray-700 text-right text-sm w-auto"
              >
                <Text size="txtPromptMedium14">View All</Text>
              </Link>
            )}
          </div>
        </div>

        <Table.Root className=" w-full">
          <Table.Header className=" mb-10">
            <Table.Row>
              {MembersTableHeader.map((item, i) => (
                <Table.ColumnHeaderCell key={i}>
                  <Text
                    className="h-7 text-gray-700 text-lg"
                    size="txtPromptMedium18"
                  >
                    {item}
                  </Text>
                </Table.ColumnHeaderCell>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map((item, i) => (
              <Table.Row key={i}>
                <Table.RowHeaderCell className="!shadow-none">
                  <div className="flex h-full flex-col items-start justify-center">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      {item.no}
                    </Text>
                  </div>
                </Table.RowHeaderCell>

                <Table.Cell className="!shadow-none">
                  <div className="flex h-full flex-col items-start justify-center">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPromptRegular16"
                    >
                      {item.code}
                    </Text>
                  </div>
                </Table.Cell>

                <Table.Cell className="!shadow-none flex flex-row gap-[15px] items-center justify-start">
                  <Img
                    className="h-10 md:h-auto rounded-[50%] w-10"
                    src={item.image}
                    alt="ellipse268"
                  />
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-gray-800 w-auto"
                      size="txtPromptRegular16"
                    >
                      {item.name}
                    </Text>
                  </div>
                </Table.Cell>

                <Table.Cell className="!shadow-none">
                  <div className="flex h-full flex-col items-start justify-center">
                    <Text
                      className="text-base text-gray-800"
                      size="txtPromptRegular16"
                    >
                      {item.email}
                    </Text>
                  </div>
                </Table.Cell>

                <Table.Cell className="!shadow-none">
                  <Button
                    className="cursor-pointer leading-[normal] min-w-[90px] md:mt-0 my-1 text-base text-center"
                    shape="round"
                    color={
                      item.status === "Active" ? "light_green_50" : "orange_50"
                    }
                    size="xs"
                    variant="fill"
                  >
                    {item.status}
                  </Button>
                </Table.Cell>

                <Table.Cell className="!shadow-none ">
                  <div className="flex flex-row gap-5 items-center justify-start h-full">
                    <Button className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <BsTrash3Fill className="text-[#FF0000]" />
                      <Text
                        className="text-base text-[#FF3535] w-auto"
                        size="txtPromptRegular16Red500"
                      >
                        Delete
                      </Text>
                    </Button>
                    <Button className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <BiSolidReport className="text-[#0177FB]" />
                      <Text
                        className="text-base text-[#0177FB] w-auto"
                        size="txtPromptRegular16LightblueA700"
                      >
                        Report
                      </Text>
                    </Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
};

export default MemberTable;
