import { createDiv } from "./initPage";
function createHome() {
  const st = document.querySelector(".title");
  st.remove();
  createDiv("title", "title", ".first", "", "div");
  createDiv("p1", "", ".title", "Welcome in our pleasent restaurant!", "P");
}
export { createHome };
