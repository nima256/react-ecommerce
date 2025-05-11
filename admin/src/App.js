import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  const values = { isToggleSidebar, setIsToggleSidebar };

  useEffect(() => {}, [isToggleSidebar]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <div className="main d-flex">
          <div
            className={`sidebarWrapper ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
            <Sidebar />
          </div>

          <div
            className={`content ${isToggleSidebar === true ? "toggle" : ""}`}
          >
            <Routes>
              <Route path={"/"} exact={true} element={<Dashboard />} />
              <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
