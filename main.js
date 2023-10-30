'use strict';

{
  document.addEventListener("mousemove", (e) =>{
    document.querySelector(".xy").textContent = `縦: ${e.clientY} 横: ${e.clientX}`
  });
}

{
  document.addEventListener("keydown", (e) => {
    document.querySelector(".key").textContent = e.key
  });
}