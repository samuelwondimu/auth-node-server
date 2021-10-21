import { List, ListItem, Table, Typography, Paper, Box } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

interface Block {
  id: string;
  type: string;
  data: {
    text?: string;
    level?: string;
    image?: string;
    embed?: string;
    items: any[];
    events: any;
  };
}

export default function jsonToJSX(block: Block[]) {
  let jsxBlock: { type: string; jsx: any }[] = [];

  block.map((block: Block) => {
    switch (block.type) {
      case "header":
        jsxBlock.push({
          type: "header",
          jsx: (
            <Typography
              variant={
                `h${block.data.level}` as
                  | "h1"
                  | "h2"
                  | "h3"
                  | "h4"
                  | "h5"
                  | "h6"
                  | "button"
                  | "caption"
                  | "inherit"
                  | "subtitle1"
                  | "subtitle2"
                  | "body1"
                  | "body2"
                  | "overline"
                  | undefined
              }
              sx={{ fontWeight: 600 }}
            >
              {block.data.text}
            </Typography>
          ),
        });
        break;
      case "image":
        jsxBlock.push({
          type: "image",
          jsx: <img src={block.data.level} alt={"blog--1"} />,
        });
        break;
      case "table":
        jsxBlock.push({
          type: "table",
          jsx: <Table></Table>,
        });
        break;

      case "paragraph":
        jsxBlock.push({
          type: "paragraph",
          jsx: (
            <Typography
              gutterBottom
              sx={{
                lineHeight: "2",
                fontSize: "20px",
              }}
            >
              {block.data.text}
            </Typography>
          ),
        });
        break;
      case "embed":
        jsxBlock.push({
          type: "embed",
          jsx: (
            <Box textAlign={"center"}>
              <iframe
                title="youtube"
                width="560"
                height="315"
                src={block.data.embed}
                allow="autoplay; encrypted-media"
              />
            </Box>
          ),
        });
        break;
      case "list":
        jsxBlock.push({
          type: "list",
          jsx: (
            <List>
              {block.data.items.map((item: string) => {
                return (
                  <ListItem key={item}>
                    <Typography>{item}</Typography>
                  </ListItem>
                );
              })}
            </List>
          ),
        });
        break;
      case "EventTimeline":
        jsxBlock.push({
          type: "EventTimeline",
          jsx: (
            <Timeline position="alternate">
              {block.data.events.map((event: any, index: any) => {
                return (
                  <TimelineItem key={index}>
                    <TimelineOppositeContent>
                      <Typography color="textSecondary">
                        {event.time}
                      </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Paper elevation={3}>
                        <Box p={1}>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {event.description}
                          </Typography>
                        </Box>
                      </Paper>
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
          ),
        });
        break;
      case "MembersOnly":
        jsxBlock.push({
          type: "MembersOnly",
          jsx: (
            <Box sx={{ backgroundColor: "#e2e2e2" }} p={2}>
              <Typography
                textAlign={"center"}
                variant="h5"
                sx={{ fontWeight: 800 }}
              >
                Members Only
              </Typography>
            </Box>
          ),
        });
        break;

      default:
        console.log("Unknown block type", block.type);
        break;
    }
    return null;
  });

  return jsxBlock;
}
