import React from "react";
import { Paper, Typography, Box, Grid, Button, Divider } from "@mui/material";
import { SearchField } from "../components/common";
import CategoriesCard from "../components/categories/categoriesCard";
import { categoires } from "../_mock_/blog.mock";

interface CategoriesProps {}

const categoiresList = [
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
  categoires(),
];

// eslint-disable-next-line no-empty-pattern
const Categories: React.FC<CategoriesProps> = ({}) => {
  return (
    <Paper>
      <Box p={2}>
        {/* Top Header */}
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ fontWeight: 600, py: 2 }}>
              Categories
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
              Create Category
            </Button>
          </Grid>
        </Grid>
        <Box py={2}>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          {categoiresList.map((category) => {
            return <CategoriesCard category={category} />;
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default Categories;
