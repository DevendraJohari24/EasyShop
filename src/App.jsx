import Header from "./components/layout/Header/Header";
import Home from "./pages/Home/Home";
import {Routes, Route} from "react-router-dom";
import Product from "./pages/Product/Product";

function App() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Header  />} >
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="*" element={<>Error</>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
