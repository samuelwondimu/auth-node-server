import { Box, Typography } from "@mui/material";
import React from "react";

const MembersOnlyComponent = () => {
  return (
    <Box sx={{ backgroundColor: "#e2e2e2" }} p={2}>
      <Typography textAlign={"center"} variant="h5" sx={{ fontWeight: 800 }}>
        Members Only
      </Typography>
    </Box>
  );
};

export default MembersOnlyComponent;
