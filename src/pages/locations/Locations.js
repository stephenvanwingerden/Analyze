import React from "react";
import { Grid } from "@material-ui/core";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle/PageTitle";

// data

const datatableData = [
  ["LOWES", "2245", "LOWE'S OF NE LOUISVILLE", "LOUISVILLE", "KY"],
];

export default function Locations() {
  return (
    <>
      <PageTitle title="Locations" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Locations List"
            data={datatableData}
            columns={["Company", "Store #", "Store Name", "City", "State"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
