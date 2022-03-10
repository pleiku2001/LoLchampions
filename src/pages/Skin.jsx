import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const axios = require("axios");

function Skin() {
  const nameId = useParams();
  // console.log(nameId.championId);
  const [name, setName] = useState([]);
  const [skin, setSkin] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${nameId.championId}.json`
        );
        const myArray = Object.values(response.data.data);
        setName(myArray);
        setSkin(myArray[0]?.skins);
      } catch (error) {}
    }
    getUser();
  }, []);
  console.log(skin);
  //   console.log(name.spells);

  return (
    <div style={{ backgroundColor: "#222020" }} id="scroll">
      <Navbar />

      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexWrap: "wrap",
          backgroundColor: "#696666",
          pt: 5,
          position: "relative",
        }}
      >
        <a
          href="#scroll"
          style={{
            position: "fixed",
            bottom: 110,
            right: 60,
            backgroundColor: "red",
            padding: 10,
            textDecoration: "none",
          }}
        >
          Top
        </a>
        <Typography
          sx={{ position: "absolute", left: 90, top: 20, color: "#eb1313" }}
        >
          <Link to="/" style={{ color: "whitesmoke" }}>
            Home
          </Link>{" "}
          {`-->`}{" "}
          <Link to={"/champions"} style={{ color: "whitesmoke" }}>
            Champions
          </Link>
        </Typography>
        {skin.map((e) => {
          return (
            <Box sx={{ m: 3 }}>
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nameId.championId}_${e.num}.jpg`}
                alt=""
              />

              <Typography sx={{ textAlign: "center", color: "#f7f7f7" }}>
                ID: {e.id}
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#f7f7f7" }}>
                Number: {e.num}
              </Typography>
              <Typography sx={{ textAlign: "center", color: "#f7f7f7" }}>
                Name: {e.name}
              </Typography>
            </Box>
          );
        })}
      </Container>
      <Footer />
    </div>
  );
}

export default Skin;
