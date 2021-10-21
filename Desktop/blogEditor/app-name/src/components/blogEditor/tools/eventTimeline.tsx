import React, { useState } from "react";
import { Box, Fab, Paper, Typography } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";

import { Add as AddIcon } from "@mui/icons-material";

const DEFAULT_INITIAL_DATA = () => {
  return {
    events: [
      {
        time: "Time",
        description: "Description",
      },
    ],
  };
};

interface EventTimelineProps {
  data: any;
  onDataChange: any;
  readOnly: any;
}

const EventTimeline: React.FC<EventTimelineProps> = ({
  data,
  onDataChange,
  readOnly,
}) => {
  const [timelineData, setTImelineData] = useState(
    data.events.length > 0 ? data : DEFAULT_INITIAL_DATA
  );

  const updateTimelineData = (newData: any) => {
    setTImelineData(newData);
    if (onDataChange) {
      // Inform editorjs about data change
      onDataChange(newData);
    }
  };

  const onAddEvent = (e: any) => {
    const newData = {
      ...timelineData,
    };

    newData.events.push({
      time: "Time",
      description: "Description",
    });
    updateTimelineData(newData);
  };

  const onContentChange = (index: any, fieldName: any) => {
    return (e: any) => {
      const newData = {
        ...timelineData,
      };
      newData.events[index][fieldName] = e.currentTarget.textContent;
      updateTimelineData(newData);
    };
  };

  return (
    <>
      <Box>
        <Timeline position="alternate">
          {timelineData.events.map((event: any, index: any) => (
            <TimelineItem key={index}>
              <TimelineOppositeContent>
                <Typography
                  color="textSecondary"
                  onBlur={onContentChange(index, "time")}
                  suppressContentEditableWarning={!readOnly}
                  contentEditable={!readOnly}
                >
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
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600 }}
                      onBlur={onContentChange(index, "description")}
                      suppressContentEditableWarning={!readOnly}
                      contentEditable={!readOnly}
                    >
                      {event.description}
                    </Typography>
                  </Box>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          ))}
          {!readOnly && (
            <TimelineItem>
              <TimelineOppositeContent />
              <TimelineSeparator>
                <Fab color="primary" aria-label="add" onClick={onAddEvent}>
                  <AddIcon />
                </Fab>
              </TimelineSeparator>
              <TimelineContent />
            </TimelineItem>
          )}
        </Timeline>
      </Box>
    </>
  );
};

export default EventTimeline;
