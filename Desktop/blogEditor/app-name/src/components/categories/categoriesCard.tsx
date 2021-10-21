import React from "react";
import { Box, Card, Grid, Typography } from "@mui/material";

interface CategoriesCardProps {
  category: any;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ category }) => {
  return (
    <Grid item xs={12} md={12} lg={3}>
      <Card elevation={0}>
        <Box p={5} textAlign={"center"} sx={{ backgroundColor: "#f1f1f1" }}>
          <Typography variant="h6" gutterBottom>
            {category.title}
          </Typography>
          <Typography variant="h6" color="GrayText">
            {category.totalBlogs} - Blogs
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
};

export default CategoriesCard;
