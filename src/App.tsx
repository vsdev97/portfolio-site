import React from "react";
import { BrowserRouter } from "react-router-dom";
import { LayoutComponent } from "./components/layout";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LayoutComponent />
    </BrowserRouter>
  );
};

export default App;
