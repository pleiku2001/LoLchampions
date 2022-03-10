import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    img: "https://wallpaperaccess.com/full/217097.jpg",
    title: "Breakfast",
  },
  {
    img: "https://i.pinimg.com/originals/6c/18/cf/6c18cfea1f788b7ffa8b56f6b5cfba97.jpg",
    title: "Burger",
  },
  {
    img: "https://i.pinimg.com/originals/d6/b0/63/d6b063fa14d5993696ab640b4c18ad1d.jpg",
    title: "Camera",
  },
  {
    img: "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/rg-league-display-2017/en_US/cb24025fade09e3f965776440dffcc65024d3266/assets/img/content/splash/content-original-championillustrations-group-slashes.jpg",
    title: "Coffee",
  },
  {
    img: "http://lol-stats.net/uploads/X0geMjIXBEZOVO5U7CvrqJW3shfN1NaI57cmgyxZ.jpeg",
    title: "Hats",
  },
  {
    img: "https://images8.alphacoders.com/539/thumb-1920-539384.jpg",
    title: "Honey",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUYMcgU9X6aC7-XSvFpFKYgUs4WEQ7rQBbCg&usqp=CAU",
    title: "Basketball",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/510/973/103/video-game-league-of-legends-ahri-league-of-legends-draven-league-of-legends-wallpaper-preview.jpg",
    title: "Fern",
  },
  {
    img: "https://lisbdnet.com/wp-content/uploads/2021/09/Camille-Wallpaper-1.webp",
    title: "Mushrooms",
  },
  {
    img: "http://lol-stats.net/uploads/xYBfpI64pjufyVJEwAJcF0qDz1zl5Dj1tTJhMqfz.jpeg",
    title: "Tomato basil",
  },
  {
    img: "https://i.pinimg.com/originals/47/1f/25/471f255ac144c3d71ee8acaa860934d2.jpg",
    title: "Sea star",
  },
  {
    img: "https://cdna.artstation.com/p/assets/images/images/015/608/430/large/artur-sadlos-leg-duo-sh030-background-as-v002.jpg?1548951834",
    title: "Bike",
  },
];
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
function Layout() {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <ImageList
        sx={{ width: 700, height: 600 }}
        variant="quilted"
        cols={4}
        rowHeight={180}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Layout;
