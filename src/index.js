import React from "react";
import ReactDOM from "react-dom/client";
import DisplayMembers from "./DisplayMembers"
import UserCard from "./UserCard";
import Counter from "./CountER";



const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
<>
<DisplayMembers/>
<UserCard/>
<Counter/>
</>



);