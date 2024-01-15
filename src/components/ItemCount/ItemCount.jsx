/* eslint-disable react/prop-types */
import { Button, Flex, Heading } from "@chakra-ui/react";

import useCounter from "../../hooks/useCounter";

export const ItemCount = ({ initialValue, stock, onAdd }) => {
  const { count, increment, decrement } = useCounter(initialValue, stock);

  return (
    <Flex justify={"space-around"} align={"center"} ml={2} w={"100%"}>
      <Button backgroundColor="#2f82cd" color="#fff" onClick={decrement}>
        -
      </Button>
      <Heading>{count}</Heading>
      <Button backgroundColor="#2f82cd" color="#fff" onClick={increment}>
        +
      </Button>
      <Button onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  );
};
