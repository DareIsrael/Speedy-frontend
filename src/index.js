import React from "react";
import ReactDOM from "react-dom";
import App from "./Component/App.js";

import { PostsContextProvider } from './context/PostsContext';
import { AuthContextProvider } from "./context/AuthContext.js";

 ReactDOM.render(
 <AuthContextProvider>
<PostsContextProvider> 
 <App />
</PostsContextProvider>
 </AuthContextProvider>
 
, document.getElementById("root"));


// ReactDOM.render(

// <App />, document.getElementById("root"));