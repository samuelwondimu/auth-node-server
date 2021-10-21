import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import moment from "moment";
import { Box } from "@mui/material";

interface BlogCardProps {
  blog: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Grid item xs={12} md={12} lg={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 200, display: { xs: "none", sm: "block" } }}
            image={blog.image}
            alt={blog.imageLabel}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {blog.title}
            </Typography>
            <Box display="flex">
              <Typography
                sx={{ flexGrow: 1 }}
                variant="subtitle1"
                color="text.secondary"
              >
                By - {blog.editor.fullname}
              </Typography>

              <Typography variant="subtitle1" color="text.secondary">
                Edited | {moment(blog.createdAt).format("MMM Do YYYY")}
              </Typography>
            </Box>
            <Typography variant="subtitle1" paragraph>
              {blog.body.slice(0, 200)} ...
            </Typography>
            <Grid container justifyContent={"space-between"}>
              <Grid item xs={2} container direction="row" alignItems="center">
                <Grid item>
                  <RemoveRedEyeIcon sx={{ fontSize: 20, mr: 1 }} />
                </Grid>
                <Grid item> {blog.views} </Grid>
              </Grid>
              <Grid item xs={2} container direction="row" alignItems="center">
                <Grid item>
                  <ThumbUpIcon sx={{ fontSize: 20, mr: 1 }} />
                </Grid>
                <Grid item> {blog.likes} </Grid>
              </Grid>
              <Grid item xs={2} container direction="row" alignItems="center">
                <Grid item>
                  <ModeCommentIcon sx={{ fontSize: 20, mr: 1 }} />
                </Grid>
                <Grid item> {blog.comment} </Grid>
              </Grid>
              <Grid item xs={6} />
            </Grid>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default BlogCard;
