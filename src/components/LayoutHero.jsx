import React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Layout from "./Layout";

const Backgrg = styled("div")({
  // backgroundColor: "#cdced4",
  height: 500,
  position: "absolute",
  top: 60,
  width: "100%",
  zIndex: 1,
  // backgroundImage: "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80",
  backgroundPosition: "center",
});

function LayoutHero() {
  return (
    <>
      <Backgrg>
        <Typography
          color="inherit"
          align="center"
          variant="h4"
          marked="center"
          mt={10}
        >
          League of Legends
        </Typography>
        <Typography
          color="inherit"
          align="center"
          variant="h6"
          sx={{ mb: 1, mt: 5 }}
        >
          League of Legends is a team-based game with over 140 champions to make
          epic plays with.
        </Typography>
        <Button
          color="primary"
          variant="contained"
          size="large"
          component="a"
          href="/champions"
          sx={{ minWidth: 200, m: 5, ml: 82 }}
        >
          Discover
        </Button>
        <Typography
          variant="body2"
          align="center"
          color="inherit"
          sx={{ mt: 2 }}
        >
          Play now for free
        </Typography>
      </Backgrg>
      <Container sx={{ mt: 70 }}>
        {/* <h1>hello</h1> */}
        <Layout />
      </Container>
    </>
  );
}

export default LayoutHero;
