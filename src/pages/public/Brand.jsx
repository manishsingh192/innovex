import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { imageData } from "../../mydata/data";
import Forall from "./Forall";

const Brand = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      const container = document.getElementById("slider-container");
      if (container) {
        const maxScroll = container.scrollWidth - container.clientWidth;
        const newScrollPosition =
          scrollPosition >= maxScroll ? 0 : scrollPosition + 150;

        container.scrollTo({
          left: newScrollPosition,
          behavior: "smooth",
        });

        setScrollPosition(newScrollPosition);
      }
    }, 3000);

    return () => clearInterval(sliderInterval);
  }, [scrollPosition]);

  return (
    <>
    <Box sx={{ padding: 4, background: "#efefef", overflowX: "auto" }}>
      <Grid
        id="slider-container"
        container
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          gap: 2,
          overflowX: "hidden",
        }}
        
      >
        {imageData.map((item, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 150,
              height: 150,
              backgroundImage: `url(${item.imagePath})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        ))}
      </Grid>
    </Box>

<Box>
  <Forall/>
</Box>
</>

  );
};

export default Brand;
