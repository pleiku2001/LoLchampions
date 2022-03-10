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

function Details() {
  const nameId = useParams();
  // console.log(nameId.championId);
  const [name, setName] = useState([]);
  const [skin, setSkin] = useState([]);
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          `http://ddragon.leagueoflegends.com/cdn/12.5.1/data/en_US/champion/${nameId.championId}.json`
        );
        const myArray = Object.values(response?.data?.data);
        setName(myArray[0]);
        setSkin(myArray[0]?.skins);
        setSkill(myArray[0]?.spells);
      } catch (error) {}
    }
    getUser();
  }, []);
  console.log(skill);

  function ramdomNumber() {
    let arr = [];
    for (let i = 0; i < skin.length; i++) {
      arr.push(skin[i].num);
    }
    let number = arr[Math.floor(Math.random() * arr.length)];
    // console.log(number);
    return number;
  }
  // ramdomNumber();

  return (
    <div style={{ backgroundColor: "#222020" }}>
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
          minHeight: 1200,
        }}
      >
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
        {/* {skin.map((e) => {
          return (
            );
          })} */}
        <Box sx={{ m: 10 }}>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${
              nameId.championId
            }_${ramdomNumber()}.jpg`}
            alt=""
            width={1000}
          />
        </Box>
        <Box sx={{ mt: 1, p: 5 }}>
          <Typography sx={{ textAlign: "start", color: "#fafafa", width: 100 }}>
            Name: {name.name}
          </Typography>
          <Typography sx={{ textAlign: "start", color: "#ffffff", width: 500 }}>
            Lore: {name.lore}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ textAlign: "start", color: "#f7f7f7", width: 500, mt: 2 }}
          >
            Ally Tips: {name.allytips}
          </Typography>
          <Typography
            sx={{ textAlign: "start", color: "#f7f7f7", width: 500, mt: 2 }}
          >
            Enemy Tips: {name.enemytips}
          </Typography>
        </Box>
        <Box sx={{ m: 10 }}>
          {skill.map((e) => {
            return (
              <div style={{ display: "flex", margin: 20 }}>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/12.5.1/img/spell/${e.id}.png`}
                  alt=""
                  width={60}
                  height={60}
                  style={{ marginTop: 5, marginRight: 10 }}
                />
                <div>
                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#f7f7f7",
                      width: 500,
                      // mt: 2,
                    }}
                  >
                    Name: {e.name}
                  </Typography>

                  <Typography
                    sx={{
                      textAlign: "start",
                      color: "#f7f7f7",
                      width: 500,

                      // mt: 2,
                    }}
                  >
                    Description: {e.description}
                  </Typography>
                </div>
              </div>
            );
          })}
        </Box>
      </Container>
      <Footer />
    </div>
  );
}

export default Details;
