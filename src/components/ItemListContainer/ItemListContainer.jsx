/* eslint-disable react/prop-types */

import { getPorCategoria, getProductos } from "../../data/dataMock";
import { useEffect, useState } from "react";

import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    const productosPromise = idCategoria
      ? getPorCategoria(idCategoria)
      : getProductos();

    productosPromise
      .then((productosList) => setProductos(productosList))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, [idCategoria]);

  return (
    <div className="item-list-container">
      {isLoading ? (
        "Cargando productos..."
      ) : productos && productos.length > 0 ? (
        <ItemList className="item-list" productos={productos} />
      ) : (
        "No hay productos para mostrar"
      )}
    </div>
  );
};
