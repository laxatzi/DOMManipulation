"use strict";

const messageDiv = document.createElement("div");
document.body.append(messageDiv);

const message = document.createElement("p");
const secMessage = document.createElement("p");

messageDiv.append(message, secMessage);
