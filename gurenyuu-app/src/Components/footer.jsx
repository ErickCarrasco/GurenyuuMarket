import React from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import gurenyuuIcon from './Styles/Neco-Arc_Happy.png';
function FooterPage() {
  return (
    <AppBar position="static" style={{ backgroundColor: "gray", 
  }} >
    <Container maxWidth="md">
      <Toolbar>
        <div style={{ marginLeft: "10px" }}>
        <br></br>
          <img src={gurenyuuIcon} width="80px" height="90px" alt="GURENYUU" ></img>
          <br></br>

        </div>
        <div style={{ marginLeft: "200px" }}>
        <br></br>
          <Typography variant="body1" color="default">
            All the memes and images belong to their respective owners, lel
          </Typography>
          <br></br>

        </div>

        <div style={{ marginLeft: "40px" }}>
          <br></br>
          <Typography variant="body1" color="default">
            NECO-ARC & NEPTUNA Co.
          </Typography>
          <br></br>
          <br></br>
        </div>
      </Toolbar>
    </Container>
  </AppBar>
  );
}

export default FooterPage;