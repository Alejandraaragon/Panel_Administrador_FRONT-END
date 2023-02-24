import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";



function App() {



  return (
  <div className="app">
    <BrowserRouter>
      <Routes>

       <Route  path="/">
        <Route index element={<Home />} />                  {/* /home */}

        <Route path="login" element={<Login />} />          {/* /login */}

        <Route path="users">
        <Route index element={<List />} />                  {/* /users */}

        <Route path=":userId" element={<Single />} />       {/* /users/1234 */}

        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>} />               {/* /users/new */} 
        </Route>

        <Route path="products">
        <Route index element={<List />} />                  {/* /products */}

        <Route path=":productsId" element={<Single />} />       {/* /products/1234 */}

        <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>} />               {/* /users/new */} 
        </Route>
       </Route>

      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
