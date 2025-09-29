import { refreshpage } from "./index.js";

export function aboutpage() {
  refreshpage();
  const content = document.getElementById("content");

  const aboutpage = document.createElement("div");
  aboutpage.classList.add("about-page");
  const aboutpara = document.createElement("p");
  aboutpara.textContent = "about the beef";
  aboutpara.classList.add("header");

  const bio = document.createElement("p");
  bio.textContent = "the beef was established in 1980 by Robert Dufresne";
  bio.classList.add("aboutbio");

  aboutpage.appendChild(aboutpara);
  aboutpage.appendChild(bio);

  const locationdiv = document.createElement("div");
  locationdiv.classList.add("locationdiv");
  const locationtitle = document.createElement("p");
  locationtitle.textContent = "location";
  locationtitle.classList.add("header");
  const location = document.createElement("p");
  location.textContent = "Accra, Ghana";

  const locationgps = document.createElement("p");
  locationgps.textContent = "-51.58297, -178.02765";

  aboutpage.appendChild(locationdiv);
  locationdiv.appendChild(locationtitle);
  locationdiv.appendChild(location);
  locationdiv.appendChild(locationgps);

  const contacttitle = document.createElement("p");
  contacttitle.textContent = "contact";
  contacttitle.classList.add("header");

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "phone: 233-55-123- 4567";

  const emailAdd = document.createElement("p");
  emailAdd.textContent = "email: thebeef233@gmail.com";

  const socialMedia = document.createElement("p");
  socialMedia.textContent = "follow us";
  socialMedia.classList.add("social_links");

  const socialLinks = document.createElement("a");
  socialLinks.textContent = "instagram";

  const warningtxt = document.createElement("p");
  warningtxt.textContent =
    "The kitchen closes at 10.00 PM Sunday to Thursday and 10:30 PM Friday and Saturday";

  content.appendChild(aboutpage);
  [
    // aboutpara,
    // locationtitle,
    // contacttitle,
    emailAdd,
    phoneNumber,
    socialMedia,
    socialLinks,
    warningtxt,
  ].forEach((content) => aboutpage.appendChild(content));
}
