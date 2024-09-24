import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { GiHamburgerMenu } from "react-icons/gi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { PiSuitcaseSimple } from "react-icons/pi";

export default function SideBoxMobile() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <Center>
        <ListDrawer style={{ padding: "20px" }}>
          <p style={{ marginLeft: "19px", marginBottom: "19px" }}>
            Minha Plataforma
          </p>
          <ListItem disablePadding>
            <a href="#whoweare">
              <ListItemButton>
                <ListItemIcon>
                  <FaRegBuilding size={25} className="icon" />
                </ListItemIcon>
                <ListItemText primary={"Quem Somos"} className="text" />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem disablePadding>
            <a href="#solutions">
              <ListItemButton>
                <ListItemIcon>
                  <PiSuitcaseSimple size={25} className="icon" />
                </ListItemIcon>
                <ListItemText primary={"Soluções"} className="text" />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem disablePadding>
            <a href="#customers">
              <ListItemButton>
                <ListItemIcon>
                  <PiSuitcaseSimple size={25} className="icon" />
                </ListItemIcon>
                <ListItemText primary={"Clientes"} className="text" />
              </ListItemButton>
            </a>
          </ListItem>
          <ListItem disablePadding>
            <a href="#portals">
              <ListItemButton>
                <ListItemIcon>
                  <PiSuitcaseSimple size={25} className="icon" />
                </ListItemIcon>
                <ListItemText primary={"Portais"} className="text" />
              </ListItemButton>
            </a>
          </ListItem>
          <Divider />
        </ListDrawer>
      </Center>
    </Box>
  );

  return (
    <Container>
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu color="white" size={20} />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </Container>
  );
}

const Container = styled.div`
width: 0;
`;

const Center = styled.div`
  height: 100%;
  p {
    font-weight: bold;
    color: #6f797a;
  }
  .icon {
    color: #3f4849;
  }
  .text {
    font-weight: bold;
    color: #3f4849;
  }
`;

const ListDrawer = styled(List)`
  display: flex;
  flex-direction: column;
  .logout {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    p {
      color: #3f4849;
      font-size: 17px;
    }
  }
`;
