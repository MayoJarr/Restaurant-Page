import { createDiv } from "./initPage";
function createMenu() {
  const st = document.querySelector(".title");
  st.remove();
  createDiv("title", "title", ".first", "", "div");
  createDiv("p1", "p1", ".title", "Our Menu:", "P");
  createDiv("container", "container", ".title", "", "div");
  createDiv("item1", "item1", ".container", "pierogi", "div");
  createDiv("item2", "item2", ".container", "bigos", "div");
  createDiv("item3", "item3", ".container", "żur", "div");
  createDiv("item4", "item4", ".container", "łazanki", "div");
  createDiv("itemImg1", "itemImg1", ".item1", "", "div");
  createDiv("itemImg2", "itemImg2", ".item2", "", "div");
  createDiv("itemImg3", "itemImg3", ".item3", "", "div");
  createDiv("itemImg4", "itemImg4", ".item4", "", "div");
}
export { createMenu };
