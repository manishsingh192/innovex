import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { imageData } from "../../mydata/data";
import Forall from "./Forall";

const Brand = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrameId;

    const scrollSpeed = 1; // px per frame

    const scroll = () => {
      if (container) {
        container.scrollLeft += scrollSpeed;

        const scrollWidth = container.scrollWidth / 2;

        // Reset when halfway through (since we duplicated the list)
        if (container.scrollLeft >= scrollWidth) {
          container.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Duplicate the data for infinite loop illusion
  const doubledData = [...imageData, ...imageData];

  return (
    <>
      <Box sx={{ padding: 4, background: "#efefef", overflowX: "hidden" }}>
      <Typography varient='h1' fontSize={40} fontWeight={600} >
        Client! 
     
      </Typography>
        <Grid
          ref={containerRef}
          container
          id="slider-container"
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 2,
            overflowX: "scroll",
            scrollBehavior: "auto",

            // Hide scrollbars
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari
            },
          }}
        >
          {doubledData.map((item, index) => (
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
        <Forall />
      </Box>
    </>
  );
};

export default Brand;
