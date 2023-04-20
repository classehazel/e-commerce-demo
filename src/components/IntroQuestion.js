import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Typography,
} from "@mui/material";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      sx={{
        marginY: 8,
        textAlign: "center",
        justifyContent: "center",
        display: "flex",
      }}
      maxWidth="100"
    >
      <Box
        sx={{
          justifyContent: "center",
          width: 900,
          alignItems: "center",
          marginTop: 8,
          marginBottom: 8,
        }}
      >
        <Typography variant="h4" paddingBottom={5}>
          Frequently Asked Questions
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "30%", flexShrink: 0 }}>
              Location
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Where is the location of physical SHOPPY store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography marginLeft={7} marginRight={7}>
              The ONLY physical SHOPPY store is located in Texas, United States
              of America.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "30%", flexShrink: 0 }}>
              Shipping
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              How long does it take to get shipped?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography marginLeft={7} marginRight={7}>
              Basic shipping takes about 5-7 business days, Advanced shipping
              takes about 3-5 business days, and Premium shipping takes about
              2-3 business days.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "30%", flexShrink: 0 }}>
              Return Policy
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              What is the return policy?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography marginLeft={7} marginRight={7}>
              You can return our products by any reason within 90 days, with no
              additional fee required.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: "30%", flexShrink: 0 }}>
              Additional Questions
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              If you have more questions...
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography marginLeft={7} marginRight={7}>
              Please send us an e-mail about your questions or other opinions
              regarding SHOPPY. We are looking forward to hearing your voices!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
