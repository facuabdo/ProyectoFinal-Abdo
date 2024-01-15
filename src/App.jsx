import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/producto/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
