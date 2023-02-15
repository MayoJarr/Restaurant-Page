import { createDiv } from "./initPage";
function createHome() {
  const st = document.querySelector(".title");
  st.remove();
  const li1 = document.querySelector('.li1');
  const li2 = document.querySelector('.li2');
  const li3 = document.querySelector('.li3');
  li1.style.cssText = 'border-bottom: 2px solid #fff';
  li2.style.cssText = 'border-bottom: none'
  li3.style.cssText = 'border-bottom: none'
  createDiv("title", "title", ".first", "", "div");
  createDiv("p1", "", ".title", "Welcome in our pleasent restaurant!", "P");
}
export { createHome };
