import React from "react";
import { Paper, Typography, Box, Grid, Button, Divider } from "@mui/material";
import { SearchField } from "../components/common";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { users } from "../_mock_/blog.mock";

interface UsersPageProps {}

const UsersPage: React.FC<UsersPageProps> = () => {
  const rows = users();

  const columns: GridColDef[] = [
    { field: "id", headerName: "User ID", width: 150 },
    { field: "fullname", headerName: "Full Name", width: 250 },
    { field: "email", headerName: "Email", width: 250 },
  ];

  return (
    <Paper>
      <Box p={2}>
        {/* Top Header */}
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ fontWeight: 600, py: 2 }}>
              Users
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
              Fitler Users
            </Button>
          </Grid>
        </Grid>
        <Box sx={{ height: "70vh", width: "100%" }}>
          <DataGrid
            style={{ border: 0 }}
            rows={rows}
            columns={columns}
            pageSize={8}
            components={{
              Toolbar: GridToolbar,
            }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default UsersPage;
