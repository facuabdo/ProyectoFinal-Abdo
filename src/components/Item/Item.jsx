/* eslint-disable react/prop-types */
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

export const Item = ({ producto }) => {
  return (
    <Card maxW="sm" flex={1}>
      <CardBody>
        <Image
          src={"/" + producto.foto}
          alt={producto.nombre}
          borderRadius="lg"
          boxSize="100%"
          objectFit="contain"
          h="400px"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{producto.nombre}</Heading>
          <Text color="blue.600" fontSize="2xl">
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" backgroundColor="#2f82cd" textColor="#fff">
            <Link to={`/producto/${producto.id}`}>Ver detalle</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
