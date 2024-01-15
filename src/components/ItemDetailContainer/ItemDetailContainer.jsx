import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { ItemDetail } from "../ItemDetail/ItemDetail";
import { getProductoPorId } from "../../data/dataMock";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { idProducto } = useParams();
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductoPorId(idProducto)
      .then((producto) => setProducto(producto))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [idProducto]);

  return (
    <Box>
      {isLoading ? (
        "Cargando producto"
      ) : (
        <Flex justify={"center"} align={"center"}>
          <ItemDetail producto={producto} />
        </Flex>
      )}
    </Box>
  );
};
