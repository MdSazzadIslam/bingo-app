import React from "react";
import Header from "./components/Header";
import Board from "./components/Board";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Board />
        <Footer />
      </div>
    </div>
  );
};

export default App;
