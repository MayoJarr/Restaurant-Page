(()=>{"use strict";function e(e,t,i,o,n){i=document.querySelector(`${i}`),e=document.createElement(`${n}`),""!=t&&e.classList.add(`${t}`),e.textContent=`${o}`,i.appendChild(e)}!function(){e("first","first",".content","","div"),e("nav","",".first","","nav"),e("logo","logo","nav","Restaurant","div"),e("list","list","nav","","div"),e("ol","",".list","","OL"),e("li1","li1","ol","Home","LI"),e("li2","li2","ol","Menu","LI"),e("li3","li3","ol","Contact","LI"),e("title","title",".first","","div"),e("p1","",".title","Welcome in our pleasent restaurant!","P"),e("outer","outer","nav","","div"),e("menu","menu",".outer","///","div"),e("closeMenu","closeMenu",".list","X","div");const t=document.querySelector(".li1"),i=document.querySelector(".li2"),o=document.querySelector(".li3"),n=document.querySelector(".menu"),r=document.querySelector(".list"),l=document.querySelector(".closeMenu"),c=()=>r.style.cssText="right: -200px";t.addEventListener("click",(()=>{!function(){document.querySelector(".title").remove();const t=document.querySelector(".li1"),i=document.querySelector(".li2"),o=document.querySelector(".li3");t.style.cssText="border-bottom: 2px solid #fff",i.style.cssText="border-bottom: none",o.style.cssText="border-bottom: none",e("title","title",".first","","div"),e("p1","",".title","Welcome in our pleasent restaurant!","P")}(),c()})),i.addEventListener("click",(()=>{!function(){document.querySelector(".title").remove();const t=document.querySelector(".li1"),i=document.querySelector(".li2"),o=document.querySelector(".li3");i.style.cssText="border-bottom: 2px solid #fff",t.style.cssText="border-bottom: none",o.style.cssText="border-bottom: none",e("title","title",".first","","div"),e("p1","p1",".title","Our Menu:","P"),e("container","container",".title","","div"),e("item1","item1",".container","pierogi","div"),e("item2","item2",".container","bigos","div"),e("item3","item3",".container","żur","div"),e("item4","item4",".container","łazanki","div"),e("itemImg1","itemImg1",".item1","","div"),e("itemImg2","itemImg2",".item2","","div"),e("itemImg3","itemImg3",".item3","","div"),e("itemImg4","itemImg4",".item4","","div")}(),c()})),o.addEventListener("click",(()=>{!function(){document.querySelector(".title").remove();const t=document.querySelector(".li1"),i=document.querySelector(".li2");document.querySelector(".li3").style.cssText="border-bottom: 2px solid #fff",t.style.cssText="border-bottom: none",i.style.cssText="border-bottom: none",e("title","title",".first","","div"),e("p1","p1",".title","Contact","P"),e("container2","container2",".title","","div"),e("pcont","pcont",".container2","","div"),e("p2","p2",".pcont","phone number: 123 345 678","P"),e("p3","p2",".pcont","email adress: restaurant@gmail.com","P"),e("map","map",".container2","","div")}(),c()})),n.addEventListener("click",(()=>r.style.cssText="right: 0px")),l.addEventListener("click",(()=>c()))}()})();