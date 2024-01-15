/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";

export const ItemDetail = ({ producto }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (quantity) => {
    setQuantity(quantity);

    console.log(`Agregaste ${quantity} ${producto.nombre}`);
  };

  return (
    <Card maxW="sm" mt={10}>
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
            {producto.descripcion}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            ${producto.precio}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {quantity > 0 ? (
          <Link to={"/cart"} color="#2f82cd" fontSize={"1.5rem"}>
            Ir al carrito
          </Link>
        ) : (
          <ItemCount initialValue={1} stock={producto.stock} onAdd={onAdd} />
        )}
      </CardFooter>
    </Card>
  );
};
