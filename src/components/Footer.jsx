import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FacebookIcon from "@mui/icons-material/Facebook";
function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "warning.main",
  mr: 1,
  "&:hover": {
    bgcolor: "warning.dark",
  },
};

const LANGUAGES = [
  {
    code: "en-US",
    name: "English",
  },
  {
    code: "vn-VN",
    name: "TiengViet",
  },
];
function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "ThreeDHighlight" }}
    >
      <Container sx={{ my: 8, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: "flex" }}>
                <Box
                  component="a"
                  href="https://www.facebook.com/profile.php?id=100012661327765"
                  sx={iconStyle}
                >
                  <img
                    src="https://cdn.siasat.com/wp-content/uploads/2021/01/1200-900-Facebook.jpg"
                    alt="Facebook"
                    width="50"
                    height="50"
                    sx={{}}
                  />
                </Box>
                <Box component="a" href="/" sx={iconStyle}>
                  <img
                    src="https://play-lh.googleusercontent.com/x3XxTcEYG6hYRZwnWAUfMavRfNNBl8OZweUgZDf2jUJ3qjg2p91Y8MudeXumaQLily0"
                    width="50"
                    height="50"
                    alt="Twitter"
                  />
                </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: "none", p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/">Privacy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Language
            </Typography>
            <TextField
              select
              size="medium"
              variant="standard"
              SelectProps={{
                native: true,
              }}
              sx={{ mt: 1, width: 150 }}
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {" Made by "}
              <Link href="/" rel="sponsored" title="Freepik">
                KienNguyen
              </Link>
              {" from "}
              <Link href="/" rel="sponsored" title="Flaticon">
                Pleiku City
              </Link>
              {" - Github  "}
              <Link
                href="https://github.com/pleiku2001"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                pleiku2001
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}

export default Footer;
