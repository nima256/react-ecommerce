import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/home";
import Shop from "./pages/Shop/shop";
import Footer from "./components/footer/footer";
import NotFound from "./pages/NotFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/shop" element={<Shop />} />
        <Route exact={true} path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
