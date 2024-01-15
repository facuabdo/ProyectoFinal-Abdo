export const categorias = [
  {
    codigo: "guitarra",
    nombre: "Guitarras",
  },
  {
    codigo: "amplificadores",
    nombre: "Amplificadores",
  },
  {
    codigo: "efectos",
    nombre: "Efectos",
  },
  {
    codigo: "teclados",
    nombre: "Teclados",
  },
];

export const productos = [
  {
    id: 1,
    categoria: "guitarra",
    nombre: "Fender Stratocaster",
    precio: "1600",
    descripcion:
      "Guitarra Fender Stratocaster American Std USA 1991. Mango y diapasón de maple.",
    stock: 1,
    foto: "fender.jpg",
  },
  {
    id: 2,
    categoria: "amplificadores",
    nombre: "Marshall JCM800",
    precio: "1200",
    descripcion: "Amplificador Marshall JCM800 100W. Sonido clásico de rock.",
    stock: 3,
    foto: "marshall-jcm800.webp",
  },
  {
    id: 3,
    categoria: "efectos",
    nombre: "Boss DD-7",
    precio: "150",
    descripcion:
      "Pedal de delay digital/analogico Boss DD-7. Versatilidad y calidad.",
    stock: 5,
    foto: "boss-dd7.jpg",
  },
  {
    id: 4,
    categoria: "teclados",
    nombre: "Yamaha P-45",
    precio: "500",
    descripcion:
      "Piano digital Yamaha P-45. 88 teclas ponderadas, sonido y sensación realista.",
    stock: 2,
    foto: "yamaha-p45.webp",
  },
  {
    id: 5,
    categoria: "guitarra",
    nombre: "Gibson Les Paul",
    precio: "2500",
    descripcion:
      "Guitarra Gibson Les Paul Standard. Tono y sustain legendarios.",
    stock: 1,
    foto: "gibson.png",
  },
];

export const getCategorias = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categorias);
    }, 500);
  });
};

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};

export const getPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        productos.filter((producto) => producto.categoria === idCategoria)
      );
    }, 500);
  });
};

export const getProductoPorId = (idProducto) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((producto) => producto.id == idProducto));
    }, 500);
  });
};
