import React, { FC } from "react";
import { Card, Grid, Typography, Box } from "@mui/material";
import { Dashboard as DashboardIcon } from "@mui/icons-material";

interface DashboardCardProps {}

const DashboardCard: FC<DashboardCardProps> = () => {
  return (
    <Card elevation={0}>
      <Grid container>
        <Grid item xs={8}>
          <Box p={2}>
            <Typography variant="h6" color="GrayText" gutterBottom>
              Total Companies
            </Typography>
            <Typography variant="h4">234</Typography>
          </Box>
        </Grid>
        <Grid
          xs={4}
          sx={{ backgroundColor: "#afccf1eb" }}
          item
          container
          justifyContent="center"
        >
          <DashboardIcon
            sx={{ fontSize: 50, mt: "30%", mb: "30%", color: "#3f80d4ed" }}
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default DashboardCard;
