import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import ScreenSizeProvider from "./contexts/screen_context";
import HomePageIndex from "./pages/home_page/home_page_index";
import HeaderIndex from "./components/header/header_index";

function App() {

  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <ScreenSizeProvider>
          <HeaderIndex />
          <Routes>
            <Route path="/" element={<HomePageIndex />} />
          </Routes>
        </ScreenSizeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
