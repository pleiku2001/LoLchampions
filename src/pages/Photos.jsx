import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Skin from "./Skin";
import CircularProgress from "@mui/material/CircularProgress";

const axios = require("axios");

function Photos() {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion.json"
        );
        const myArray = Object.values(response.data.data);
        setName(myArray);
        setLoading(false);
      } catch (error) {}
    }
    getUser();
  }, []);
  console.log(loading);

  return (
    <div style={{ backgroundColor: "#d4cfcf" }} id="scroll">
      <Navbar />

      {loading ? (
        <Box sx={{ height: 100 , textAlign: "center", m: 16}}>
          <CircularProgress />
          <Typography>Loading</Typography>
        </Box>
      ) : (
        <Box
          sx={{
            mt: 10,
            ml: 5,
            mb: 5,
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* // <div key={e.key}>
        //   <img
        //     src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/champion/${e.image.full}`}
        //     alt=""
        //   />
        //   <p>{e.name}</p>
        // </div> */}
          {/*  */}
          <a
            href="#scroll"
            style={{
              position: "fixed",
              bottom: 110,
              right: 30,
              backgroundColor: "red",
              padding: 10,
              textDecoration: "none",
            }}
          >
            Top
          </a>

          {name.map((e) => {
            return (
              <Box
                sx={{
                  textDecoration: "none",
                  "&:hover": {
                    boxShadow: "4px 4px 11px 0px #2c1c1cbf",
                    WebkitBoxShadow: "4px 4px 11px 0px #201a1abf",
                  },
                }}
                key={e.key}
              >
                <Card
                  sx={{ maxWidth: 345, m: 5, backgroundColor: "#8b8b8b79" }}
                >
                  <img
                    // component="img"
                    height="210"
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${e.id}_0.jpg`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {e.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {e.blurb}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      <Link
                        to={`/skin/${e.id}`}
                        style={{ textDecoration: "none" }}
                        // sx={{
                        //   textDecoration: "none",
                        // }}
                      >
                        Skin
                      </Link>
                    </Button>
                    <Button size="small">
                      <Link
                        to={`/details/${e.id}`}
                        style={{ textDecoration: "none" }}
                        // sx={{
                        //   textDecoration: "none",
                        // }}
                      >
                        Detail
                      </Link>
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            );
          })}

          {/*  */}
        </Box>
      )}
      <Footer />
    </div>
  );
}

export default Photos;
