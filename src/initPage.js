import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";

function createDiv(name, className, appendName, text, type) {
  appendName = document.querySelector(`${appendName}`);
  name = document.createElement(`${type}`);
  if (className != "") {
    name.classList.add(`${className}`);
  }
  name.textContent = `${text}`;
  appendName.appendChild(name);
}
function initPage() {
  createDiv("first", "first", ".content", "", "div");
  createDiv("nav", "", ".first", "", "nav");
  createDiv("logo", "logo", "nav", "Restaurant", "div");
  createDiv("list", "list", "nav", "", "div");
  createDiv("ol", "", ".list", "", "OL");
  createDiv("li1", "li1", "ol", "Home", "LI");
  createDiv("li2", "li2", "ol", "Menu", "LI");
  createDiv("li3", "li3", "ol", "Contact", "LI");
  createDiv("title", "title", ".first", "", "div");
  createDiv("p1", "", ".title", "Welcome in our pleasent restaurant!", "P");

  const li1 = document.querySelector(".li1");
  const li2 = document.querySelector(".li2");
  const li3 = document.querySelector(".li3");

  li1.addEventListener("click", () => createHome());
  li2.addEventListener("click", () => createMenu());
  li3.addEventListener("click", () => createContact());
}
export { initPage, createDiv };
