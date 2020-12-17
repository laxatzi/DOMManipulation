"use strict";

// const ul = document.createElement("ul");
// const li = document.createElement("li");
// const li2 = document.createElement("li");
// document.body.append(ul);
// ul.append(li);
// ul.appendChild(li2);
// li.innerText = "item";
// li2.innerText = "item2";
// const liText = li.innerText;
// const li2Text = li2.innerText;

// console.log(liText); // item
// console.log(li2Text); // item2

{
	// create a new paragraph and append it to the end of body
	const body = document.createElement("body");
	const p = document.createElement("p");
	document.body.appendChild(p);
	p.innerText = "I am an appended paragraph!";
	const appendedP = p.innerText;
	// now append it to a newly created div element
	const div = document.createElement("div");
	document.body.appendChild(div);
	div.appendChild(p);
}
