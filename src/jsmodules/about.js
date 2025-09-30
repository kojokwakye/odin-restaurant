import { refreshpage } from "./index.js";

function createElementWithClass(tag, className, textContent) {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
}

export function aboutpage() {
  refreshpage();
  const content = document.getElementById("content");

  const aboutpage = createElementWithClass("div", "about-page");

  const aboutsecdiv = createElementWithClass("div", "card");
  const aboutpara = createElementWithClass("p", "header", "about the beef");
  const bio = createElementWithClass(
    "p",
    "aboutbio",
    "The Beef was founded in 1980 by Robert Dufresne, with a simple goal: to serve delicious, high-quality fast food. Since then, it has become a local favorite, known for its mouth-watering burgers and friendly service."
  );

  aboutsecdiv.append(aboutpara, bio);
  aboutpage.appendChild(aboutsecdiv);

  const locationdiv = createElementWithClass("div", "card");
  const locationtitle = createElementWithClass("p", "header", "location");
  const location = createElementWithClass("p", null, "Accra, Ghana");
  const locationgps = createElementWithClass(
    "p",
    null,
    "-51.58297, -178.02765"
  );

  locationdiv.append(locationtitle, location, locationgps);
  aboutpage.appendChild(locationdiv);

  const contactdiv = createElementWithClass("div", "card");
  const contacttitle = createElementWithClass("p", "header", "contact");
  const phoneNumber = createElementWithClass(
    "p",
    null,
    "phone: 233-55-123- 4567"
  );
  const emailAdd = createElementWithClass(
    "p",
    null,
    "email: thebeef233@gmail.com"
  );
  const socialMedia = createElementWithClass(
    "a",
    null,
    "follow us on instagram"
  );

  contactdiv.append(contacttitle, phoneNumber, emailAdd, socialMedia);
  aboutpage.appendChild(contactdiv);

  const closingtimediv = createElementWithClass("div", "card");
  const warningtxt = createElementWithClass(
    "p",
    null,
    "The kitchen closes at 10.00 PM Sunday to Thursday and 10:30 PM Friday and Saturday"
  );

  closingtimediv.appendChild(warningtxt);
  content.appendChild(closingtimediv);

  content.appendChild(aboutpage);
}
