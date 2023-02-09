import React, { useEffect, useState } from "react";
import Querycontext from "./querycontext";
const Querystate = props => {
   const update = async url => {
      let data = await fetch(url);
      let parseddata = await data.json();
      setArticles(parseddata.articles);
   };
   const update2 = async url => {
      let data = await fetch(url);
      let parseddata = await data.json();
      setAllArticles(parseddata.articles);
   };
   const [wish, setwish] = useState([]);
   async function getwishlist() {
      const response = await fetch("http://localhost:3001/api/showwishlist", {
         headers: {
            "Content-type": "application/json",
            "x-loca-name": localStorage.getItem("name"),
         },
      });
      const data = await response.json();
      console.log(data);
      setwish(data.item);
      //console.log(wish);
   }
   async function deletefromwishlist(val) {
      const k = await fetch("http://localhost:3001/api/wishlist/delete", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            name: localStorage.getItem("name"),
            title: val,
         }),
      });
      getwishlist();
   }

   const [allarticles, setAllArticles] = useState([]);
   const [category, setcategory] = useState("general");
   const [country, setcountry] = useState("in");
   const [mode, Setmode] = useState("white");
   const [articles, setArticles] = useState([]);
   const [search, Setsearch] = useState("");

   const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=249b3ccd1be84c9eae673e779aa251de`;
   const url2 = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=249b3ccd1be84c9eae673e779aa251de`;

   useEffect(() => {
      update(url);
      update2(url2);
   }, [category, mode, country]);

   return (
      <Querycontext.Provider
         value={{
            category,
            allarticles,
            setAllArticles,
            country,
            setcountry,
            mode,
            articles,
            url,
            update,
            wish,
            setwish,
            getwishlist,
            search,
            deletefromwishlist,
            Setsearch,

            setArticles,
            setcategory,

            Setmode,
         }}
      >
         {props.children}
      </Querycontext.Provider>
   );
};
export default Querystate;
