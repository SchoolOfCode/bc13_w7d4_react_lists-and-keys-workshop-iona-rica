import React from "react";

import "./index.css";

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Post from "../Post";

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
      <Post/>
      <Footer />
    </div>
  );
}

export default App;
