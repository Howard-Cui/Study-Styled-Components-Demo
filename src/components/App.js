import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import light from "themes/light";
import dark from "themes/dark";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: white
    min-height: 100vh;
    margin:0;
    color: black;
    font-family: "Kaushan Script";
  }
`;



function App() {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeProvider theme={{...theme, setTheme: () => {
      setTheme(s => s.id === "light" ? dark : light);
    }}}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
