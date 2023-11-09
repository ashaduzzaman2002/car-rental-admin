import { Avatar, DropdownMenu } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-gray-50_02 !sticky top-0 z-20 flex flex-col items-end justify-start p-[15px] w-full">
        <div className="flex flex-row gap-[15px] items-start justify-start mr-[5px] w-auto">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Avatar
                className="cursor-pointer"
                size="3"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                radius="full"
                fallback="A"
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className=" z-50  min-w-[180px]">
              <DropdownMenu.Item>
                <Link to={"/profile"}>Profile</Link>
              </DropdownMenu.Item>

              <DropdownMenu.Item>
                <Link to={"/settings"}>Settings</Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item color="red">
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  );
};

export default Header;
