import React from "react";
import { Paper, Typography, Box, Grid, Button, Divider } from "@mui/material";
import { SearchField } from "../components/common";
import { blogs } from "../_mock_/blog.mock";
import BlogCard from "../components/blog/blogCard";
import { Link } from "react-router-dom";

interface BlogProps {}

// create a fake blog
const blogPost = [
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
  blogs(),
];

console.log(blogPost);

// eslint-disable-next-line no-empty-pattern
const BlogPage: React.FC<BlogProps> = ({}) => {
  return (
    <Paper>
      <Box p={2}>
        {/* Top Header */}
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h5" sx={{ fontWeight: 600, py: 2 }}>
              Blogs
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
          <Grid item xs={6}>
            <Button>filter</Button>
          </Grid>
          <Grid item xs={6} textAlign={"right"}>
            <Button
              variant="contained"
              sx={{ mx: 2 }}
              component={Link}
              to="/app/blog-editor"
            >
              Create Blog
            </Button>
            <Button variant="contained">Add Filter</Button>
          </Grid>
        </Grid>
        <Box py={2}>
          <Divider />
        </Box>
        <Grid container spacing={2}>
          {blogPost.map((blog) => {
            return <BlogCard blog={blog} />;
          })}
        </Grid>
      </Box>
    </Paper>
  );
};

export default BlogPage;
