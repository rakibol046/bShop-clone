import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function MediaIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 0.5 } }}>
      <Fab size="small" sx={{ boxShadow: 0 }}>
        <FacebookOutlinedIcon />
      </Fab>
      <Fab size="small" sx={{ boxShadow: 0 }}>
        <TwitterIcon />
      </Fab>
      <Fab size="small" sx={{ boxShadow: 0 }}>
        <TwitterIcon />
      </Fab>
      <Fab size="small" sx={{ boxShadow: 0 }}>
        <TwitterIcon />
      </Fab>
    </Box>
  );
}
