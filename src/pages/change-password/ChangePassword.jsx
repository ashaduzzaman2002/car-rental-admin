import { Text } from "components";
import Layout from "layout/Layout";
import SettingsLayout from "layout/SettingsLayout";
import React from "react";

const ChangePassword = () => {
  return (
    <Layout>
      <SettingsLayout sideProfile={true}>
        <div className="w-[75%] mx-auto flex flex-col gap-3 items-start justify-start md:mt-0 mt-[42px]">
          <Text
            className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-800"
            size="txtPromptSemiBold35"
          >
            Change Password
          </Text>
          
        </div>
      </SettingsLayout>
    </Layout>
  );
};

export default ChangePassword;
