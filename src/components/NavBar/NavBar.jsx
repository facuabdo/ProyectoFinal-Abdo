import { Link as ChakraLink, List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink, Link as ReactRouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";
import { CartWidget } from "../CartWidget/CartWidget";
import { FaCreativeCommonsSamplingPlus } from "react-icons/fa";
import { getCategorias } from "../../data/dataMock";
import logo from "../../assets/facommerce-logo.png";

export function NavBar() {
  const [navbarLinks, setNavbarLinks] = useState([]);

  useEffect(() => {
    getCategorias().then((categorias) => {
      setNavbarLinks(categorias);
    });
  }, [navbarLinks]);

  return (
    <Box className="navbar">
      <ChakraLink as={ReactRouterLink} to={"/"}>
        <img src={logo} width="200" height="200" />
      </ChakraLink>

      <List className="navbar-links">
        {navbarLinks.map((link, index) => (
          <NavLink key={index} to={`/categoria/${link.codigo}`}>
            <ListItem>
              <ListIcon as={FaCreativeCommonsSamplingPlus} color="blue.500" />
              {link.nombre}
            </ListItem>
          </NavLink>
        ))}
      </List>
      <CartWidget />
    </Box>
  );
}
