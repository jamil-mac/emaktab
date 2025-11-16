import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./theme";
import AppWrapper from "./AppWrapper";
import Home from "./Home";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <AppWrapper>
        <Navbar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<Login dark={dark} />} />
          <Route path="/home" element={<Home dark={dark} />} />
        </Routes>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
