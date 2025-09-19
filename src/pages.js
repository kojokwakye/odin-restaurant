const homebtn = document.getElementById("home");
homebtn.addEventListener("click", () => {
  console.log("clickedon home");
});

function pageLoad() {
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

  document.getElementById("home").click();
}

pageLoad();
