import React from "react";
import { Grid, Paper, Box, Typography } from "@mui/material";
import { DashbaordCard } from "../components/dashboard";
import Chart from "react-google-charts";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <DashbaordCard />
        </Grid>
        <Grid item xs={3}>
          <DashbaordCard />
        </Grid>
        <Grid item xs={3}>
          <DashbaordCard />
        </Grid>
        <Grid item xs={3}>
          <DashbaordCard />
        </Grid>
      </Grid>

      <Box p={2} />
      <Paper>
        <Box p={2}>
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Users Graph
          </Typography>
          <Box p={2} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Chart
                  width={"100%"}
                  height={"500px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Year", "Sales", "Expenses", "Profit"],
                    ["2014", 1000, 400, 200],
                    ["2015", 1170, 460, 250],
                    ["2016", 660, 1120, 300],
                    ["2016", 660, 1120, 300],
                    ["2016", 660, 1120, 300],
                    ["2016", 660, 1120, 300],
                    ["2017", 1030, 540, 350],
                  ]}
                  options={{
                    colors: ["#63c7e0", "#4d87f3", "#ddd127"],
                    title: "Density of Precious Metals, in g/cm^3",
                    bar: { groupWidth: "95%" },
                    legend: { position: "none" },
                  }}
                  // For tests
                  rootProps={{ "data-testid": "2" }}
                />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ p: 2 }}>
                <Chart
                  width={"100%"}
                  height={"500px"}
                  chartType="Bar"
                  loader={<div>Loading Chart</div>}
                  data={[
                    ["Year", "Sales"],
                    ["2014", 1000],
                    ["2015", 1170],
                    ["2016", 660],
                    ["2016", 660],
                    ["2016", 660],
                    ["2016", 660],
                    ["2017", 1030],
                  ]}
                  options={{
                    colors: ["#63c7e0", "#4d87f3", "#ddd127"],
                    title: "Density of Precious Metals, in g/cm^3",
                    bar: { groupWidth: "95%" },
                    legend: { position: "none" },
                  }}
                  // For tests
                  rootProps={{ "data-testid": "2" }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Dashboard;
