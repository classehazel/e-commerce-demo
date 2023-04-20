import { Box, Container, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Cards from "./Cards";
import New from "./New";
import Outer from "./Outer";
import Top from "./Top";
import Bottom from "./Bottom";

const Category = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleTabChange = (e, tabIndex) => {
    console.log(tabIndex);
    setCurrentTabIndex(tabIndex);
  };
  return (
    <>
      <Container
        sx={{
          textAlign: "center",
          marginTop: 16,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            width: 1200,
            alignItems: "center",
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={currentTabIndex}
              onChange={handleTabChange}
              indicatorColor="none"
              textColor="inherit"
            >
              <Tab
                label="BEST"
                sx={{
                  fontSize: 20,
                  "&:hover": {
                    color: "#43352c",
                  },
                }}
              />
              <Tab
                label="NEW"
                sx={{
                  fontSize: 20,
                  "&:hover": {
                    color: "#43352c",
                  },
                }}
              />
              <Tab
                label="OUTER"
                sx={{
                  fontSize: 20,
                  "&:hover": {
                    color: "#43352c",
                  },
                }}
              />
              <Tab
                label="TOP"
                sx={{
                  fontSize: 20,
                  "&:hover": {
                    color: "#43352c",
                  },
                }}
              />
              <Tab
                label="BOTTOM"
                sx={{
                  fontSize: 20,
                  "&:hover": {
                    color: "#43352c",
                  },
                }}
              />
            </Tabs>
            {currentTabIndex === 0 && (
              <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                <Cards />
              </Box>
            )}
            {currentTabIndex === 1 && (
              <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                <New />
              </Box>
            )}
            {currentTabIndex === 2 && (
              <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                <Outer />
              </Box>
            )}
            {currentTabIndex === 3 && (
              <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                <Top />
              </Box>
            )}
            {currentTabIndex === 4 && (
              <Box sx={{ marginTop: 5, marginBottom: 5 }}>
                <Bottom />
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Category;
