import { createDiv } from "./initPage";
function createContact() {
  const st = document.querySelector(".title");
  st.remove();
  const li1 = document.querySelector('.li1');
  const li2 = document.querySelector('.li2');
  const li3 = document.querySelector('.li3');
  li3.style.cssText = 'border-bottom: 2px solid #fff';
  li1.style.cssText = 'border-bottom: none'
  li2.style.cssText = 'border-bottom: none'
  createDiv("title", "title", ".first", "", "div");
  createDiv("p1", "p1", ".title", "Contact", "P");
  createDiv("container2", "container2", ".title", "", "div");
  createDiv("pcont", "pcont", ".container2", "", "div");
  createDiv("p2", "p2", ".pcont", "phone number: 123 345 678", "P");
  createDiv("p3", "p2", ".pcont", "email adress: restaurant@gmail.com", "P");
  createDiv("map", "map", ".container2", "", "div");
}
export { createContact };
