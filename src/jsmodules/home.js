import { refreshpage } from "./index.js";
// import burger from "/src/img/burger.jpg";
// import bread from "/src/img/bread.jpg";
// import pizza from "/src/img/pizza.jpg";
// import chips from "/src/img/chips.jpg";
import pngwing from "/src/img/pngburger.png";
import pngburger from "/src/img/burger.png"
export function homepage() {
  refreshpage();
  const content = document.getElementById("content");

  const header = document.createElement("p");
  header.textContent = "THE BEEF";
  header.classList.add("homeheader");

  const mainpagediv = document.createElement("div");
  mainpagediv.classList.add("mainpagediv");
  content.appendChild(mainpagediv);

  mainpagediv.appendChild(header);

  const imgsection = document.createElement("div");
  imgsection.classList.add("imgdiv");
  mainpagediv.appendChild(imgsection);

  const createImg = (src, className) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(className);
    return img;
  };
  const images = [pngwing, pngburger];

  images.forEach((image) => {
    const img = createImg(image, "mainpageImg");
    imgsection.appendChild(img);
  });
}
