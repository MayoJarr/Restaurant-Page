import { createDiv } from "./initPage";
function createMenu() {
  const st = document.querySelector(".title");
  st.remove();
  const li1 = document.querySelector('.li1');
  const li2 = document.querySelector('.li2');
  const li3 = document.querySelector('.li3');
  li2.style.cssText = 'border-bottom: 2px solid #fff';
  li1.style.cssText = 'border-bottom: none'
  li3.style.cssText = 'border-bottom: none'
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
