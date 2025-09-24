import { refreshpage } from "./index.js";
// import burger from "/src/img/burger.jpg";
// import bread from "/src/img/bread.jpg";
// import pizza from "/src/img/pizza.jpg";
// import chips from "/src/img/chips.jpg";
import pngwing from "/src/img/pngburger.png"
export function homepage() {
  refreshpage();
  const header = document.createElement("p");
  header.textContent = "THE BEEF";
  header.classList.add("homeheader");

  const element = document.getElementById("content");
  element.appendChild(header);

  const imgsection = document.createElement("div");
  imgsection.classList.add("imgdiv");
  element.appendChild(imgsection);

  const createImg = (src, className) => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add(className);
    return img;
  };
  const images = [pngwing];

  images.forEach((image) => {
    const img = createImg(image, "mainpageImg");
    imgsection.appendChild(img);
  });
}
