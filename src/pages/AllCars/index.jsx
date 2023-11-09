import React from "react";

import Layout from "layout/Layout";
import { CarTableData } from "constants/Tables";
import CarTable from "components/table/CarTable";

const AllCarsPage = () => {
  return (
    <Layout>
      <CarTable data={CarTableData} />
    </Layout>
  );
};

export default AllCarsPage;
