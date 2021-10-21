import React from "react";
import { Paper, Typography, Box, Grid, Button, Divider } from "@mui/material";
import { SearchField } from "../components/common";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { companies } from "../_mock_/blog.mock";

interface CompaniesProps {}

const Companies: React.FC<CompaniesProps> = () => {
  const rows = companies();

  const columns: GridColDef[] = [
    { field: "id", headerName: "Company ID", width: 150 },
    { field: "comapnyName", headerName: "Comapny Name", width: 250 },
    { field: "companyEmail", headerName: "Comapny Email", width: 250 },
    { field: "companyWebsite", headerName: "Comapny Website", width: 250 },
    { field: "companyPhone", headerName: "Comapny Phone", width: 250 },
    { field: "blogs", headerName: "Blogs", width: 250 },
  ];

  return (
    <Paper>
      <Box p={2}>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ fontWeight: 600, py: 2 }}>
              Companies
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <SearchField />
          </Grid>
        </Grid>
        <Box py={2}>
          <Divider />
        </Box>
        <Grid container>
          <Grid item xs={6} />
          <Grid item xs={6} textAlign={"right"}>
            <Button variant="contained" sx={{ mx: 2 }}>
              Create Company
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ height: "70vh", width: "100%" }}>
          <DataGrid
            style={{ border: 0 }}
            rows={rows}
            columns={columns}
            pageSize={9}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default Companies;
