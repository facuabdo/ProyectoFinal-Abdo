/* eslint-disable react/prop-types */
import { Flex } from "@chakra-ui/react";
import { Item } from "../Item/Item";

export const ItemList = ({ productos }) => {
  return (
    <Flex justifyContent={"space-between"} gap={"1rem"}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </Flex>
  );
};
