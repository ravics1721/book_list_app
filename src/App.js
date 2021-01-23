import React, { useEffect, useState } from "react";
import Home from "./Components/Home";
import { CartContext } from "./appContext";
import Request from "./Components/request";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    Request.getAllBook().then((res) => {
      localStorage.setItem("books", JSON.stringify(res));
    });
  }, []);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Home />
    </CartContext.Provider>
  );
}

export default App;
