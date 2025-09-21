const homebtn = document.getElementById("homebtn");
const tabs = document.querySelectorAll(".tablinks");
const content = document.querySelectorAll(".content");
const active = document.querySelector(".active");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");
    content.forEach((para) => para.classList.remove("visible"));
    content[index].classList.add("visible");
  });
});

function contentpage() {
  const header = document.createElement("header");
  const headernode = document.createTextNode("THE BEEF");
  header.appendChild(headernode);
  const welcome = document.createElement("div");
  const welcomenode = document.createTextNode(
    "welcome to the beef since 1980, our slow roasted beef has brought flavor you can taste in every dip, drip and bit. every item in our menu is layered with tradition and served with pride"
  );
  welcome.appendChild(welcomenode);
  const element = document.getElementById("content");
  element.appendChild(header);
  element.appendChild(welcome);

  document.getElementById("homebtn").click();
}

contentpage();
