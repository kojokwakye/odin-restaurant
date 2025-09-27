import { refreshpage } from "./index.js";

export function aboutpage() {
  refreshpage();
  const header = document.createElement("header");
  const headernode = document.createTextNode("about the beef");
  header.appendChild(headernode);
  const element = document.getElementById("content");
  element.appendChild(header);

  const bio = document.createElement("p");
  bio.textContent = "the beef was established in 1980 by Robert Dufresne";
  bio.classList.add("bio-title");
  element.appendChild(bio);

  const locationdiv = document.createElement("div");

  const locationtitle = document.createElement("p");
  locationtitle.textContent = "location";
  locationtitle.classList.add("header");

  const location = document.createElement("p");
  location.textContent = "accra, ghana";

  const contacttitle = document.createElement("p");
  contacttitle.textContent = "contact";
  contacttitle.classList.add("header");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "phone: 233-55-123- 4567";

  const emailAdd = document.createElement("p");
  emailAdd.textContent = "email: thebeef233@gmail.com";

  const socialMedia = document.createElement("p");
  socialMedia.textContent = "follow us";
  socialMedia.classList.add("header");

  const socialLinks = document.createElement("a");
  socialLinks.textContent = "instagram";

  const warningtxt = document.createElement("p");
  warningtxt.textContent =
    "The kitchen closes at 10.00 PM Sunday to Thursday and 10:30 PM Friday and Saturday";

  element.appendChild(locationdiv);
  [
    locationtitle,
    location,
    contacttitle,
    emailAdd,
    phoneNumber,
    socialMedia,
    socialLinks,
    warningtxt,
  ].forEach((element) => locationdiv.appendChild(element));
}
