import React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
function Navbar() {
  const rightLink = {
    fontSize: 16,
    color: "common.white",
    ml: 3,
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "#111" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="#99999"
            href="/"
            sx={{ fontSize: 24, fontWeight: "medium" }}
          >
            {"League of Legends"}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <Link
              variant="h6"
              underline="none"
              href="https://github.com/pleiku2001"
              // color=""
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Github"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/champions"
              sx={{ ...rightLink, color: "secondary.main" }}
            >
              {"Champions"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Navbar;
