import "./App.css";
import Login from "./components/Login";
import {
   BrowserRouter,
   Switch,
   Route,
   Routes,
   Link,
   useRouteMatch,
   unstable_HistoryRouter,
} from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";

import Signup from "./components/Signup";
import Querystate from "./context/querystate";
import Querycontext from "./context/querycontext";
import Wishlist from "./components/Wishlist";
import Wishlistnavbar from "./components/Wishlistnavbar";

function App() {
   //  const[category,setcategory]=useState('general')
   //  const[sortby,setsortby]=useState('publishedAt')
   //  const[mode,Setmode]=React.useState("white");
   //  const[articles,setArticles]=useState([]);
   //  const[url,Seturl] = useState(`https://newsapi.org/v2/everything?q=${category}&from=2023-02-02&to=2023-02-02&sortBy=${sortby}&apiKey=9e3d4fcaa46f4d52be9dcdba31beadcb`);
   const a = useContext(Querycontext);

   return (
      <Querystate>
         <BrowserRouter>
            <Routes>
               <Route
                  path="/home"
                  element={
                     <>
                        <Navbar />
                        <News />
                     </>
                  }
               />
               <Route
                  path="/"
                  element={
                     <>
                        <Signup />
                     </>
                  }
               />
               <Route
                  path="/login"
                  element={
                     <>
                        <Login />
                     </>
                  }
               />
               <Route
                  path="/wishlist"
                  element={
                     <>
                     <Wishlistnavbar/>
                        <Wishlist />
                     </>
                  }
               />
            </Routes>
         </BrowserRouter>
      </Querystate>
   );
}

export default App;
