"use strict";

const ul = document.createElement("ul");
const li = document.createElement("li");
ul.append(li);

console.log(ul.childNodes); // NodeList [ li ]
