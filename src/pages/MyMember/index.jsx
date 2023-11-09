import React from "react";
import MemberTable from "components/table/MemberTable";
import { MembersTableData } from "constants/Tables";
import Layout from "layout/Layout";

const MyMemberPage = () => {
  return (
    <Layout>
      <MemberTable data={MembersTableData} />
    </Layout>
  );
};

export default MyMemberPage;
