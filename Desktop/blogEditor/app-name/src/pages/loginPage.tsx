import { FC } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = () => {
  return (
    <Box
      textAlign={"center"}
      sx={{ paddingTop: "5%", width: "50%", m: "0 auto" }}
    >
      <Paper sx={{ m: 10, p: 5 }}>
        <Typography variant="h6">Join Our Blog Editor!!</Typography>
        <Box px={10} py={2}>
          <TextField fullWidth placeholder="email" />
          <Box pt={2} />
          <TextField fullWidth placeholder="password" />
          <Box pt={2} />
          <Button variant="contained">Sign up</Button>
        </Box>
        <Box p={2}>
          <Typography color="GrayText">
            Click “Sign Up” to agree to Twof's Terms of Service and acknowledge
            that Twof's Privacy Policy applies to you.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
