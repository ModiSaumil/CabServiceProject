import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Lrpage from "./loginpage";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lrpage/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

                    

  );
}

export default App;