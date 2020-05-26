
const key = document.querySelector("#key");
const elocation = document.querySelector("#location");
const which = document.querySelector("#which");
const code = document.querySelector("#code");

const keyBox = document.querySelector(".key-box");

key.addEventListener("click", () => copyContent(key) );
elocation.addEventListener("click", () => copyContent(elocation) );
which.addEventListener("click", () => copyContent(which) );
code.addEventListener("click", () => copyContent(code) );

document.querySelector("html").addEventListener("keydown", printScreen);

function printScreen(event) {
  key.querySelector(".body").innerHTML = event.key;
  elocation.querySelector(".body").innerHTML = event.location;
  which.querySelector(".body").innerHTML = event.which;
  code.querySelector(".body").innerHTML = event.code;

  keyBox.innerHTML = event.which;
}

function copyContent(element) {
  window.getSelection().selectAllChildren(
    element.querySelector(".body") );
  document.execCommand('copy');
}