import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";
import Login from "./pages/Login/Login";

const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLoginPage,
    setIsLoginPage,
    themeMode,
    setThemeMode,
  };

  useEffect(() => {}, [isToggleSidebar]);

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {isLoginPage !== true && <Header />}

        <div className="main d-flex">
          {isLoginPage !== true && (
            <div
              className={`sidebarWrapper ${
                isToggleSidebar === true ? "toggle" : ""
              }`}
            >
              <Sidebar />
            </div>
          )}

          <div
            className={`content ${isLoginPage === true && "full"} ${
              isToggleSidebar === true ? "toggle" : ""
            }`}
          >
            <Routes>
              <Route path={"/"} exact={true} element={<Dashboard />} />
              <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
              <Route path={"/login"} exact={true} element={<Login />} />
            </Routes>
          </div>
        </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
