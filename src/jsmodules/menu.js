import { refreshpage } from "./index.js";
import forkpng from "/src/img/plate.png";

export function menupage() {
  refreshpage();
  const content = document.getElementById("content");

  const headertitle = document.createElement("header");
  headertitle.textContent = "Menu List";
  headertitle.classList.add("menu-list");

  content.appendChild(headertitle);

  const forkImage = document.createElement("img");
  forkImage.src = forkpng;
  forkImage.alt = "fork image";
  forkImage.classList.add("fork-imge");

  headertitle.appendChild(forkImage);

  const menugrid = document.createElement("div");
  menugrid.classList.add("menugrid");
  content.appendChild(menugrid);

  const menuSections = [
    {
      title: "Breakfast",
      items: [
        {
          name: "Pancakes with Syrup",
          description:
            "Fluffy pancakes stacked high, served with warm maple syrup.",
          price: "80gh",
        },
        {
          name: "Classic Bacon and Eggs",
          description:
            "Two fried eggs with crispy bacon, hash browns, and toast.",
          price: "100gh",
        },
        {
          name: "Avocado Toast",
          description:
            "Avocado spread over whole grain toast, topped with poached egg.",
          price: "120gh",
        },
        {
          name: "French Toast",
          description:
            "Golden French toast served with fresh berries and whipped cream.",
          price: "110gh",
        },
        // { name: "Omelette with Vegetables", description: "Omelette with onions, peppers, spinach, and mushrooms.", price: "130gh" },
        // { name: "Smoothie Bowl", description: "Smoothie topped with granola, fruits, and chia seeds.", price: "150gh" },
        // { name: "Bagel with Cream Cheese", description: "Bagel with cream cheese, smoked salmon, and capers.", price: "90gh" },
        // { name: "Breakfast Burrito", description: "Scrambled eggs, cheese, sausage, and avocado in a tortilla.", price: "140gh" },
      ],
    },
    {
      title: "Main Course",
      items: [
        {
          name: "Grilled Chicken Breast",
          description:
            "Grilled chicken served with mashed potatoes and steamed vegetables.",
          price: "200gh",
        },
        {
          name: "Spaghetti Bolognese",
          description:
            "Spaghetti with rich meat sauce made with ground beef and tomatoes.",
          price: "180gh",
        },
        {
          name: "Steak Frites",
          description:
            "Grilled ribeye steak with crispy French fries and peppercorn sauce.",
          price: "250gh",
        },
        {
          name: "Beef Tacos",
          description:
            "Soft tortillas with seasoned ground beef, lettuce, cheese, and sour cream.",
          price: "150gh",
        },
        // {
        //   name: "Vegetable Stir-fry",
        //   description: "Stir-fried vegetables served with steamed rice.",
        //   price: "160gh",
        // },
        // { name: "Chicken Parmesan", description: "Breaded chicken with marinara sauce and mozzarella, served with spaghetti.", price: "220gh" },
        // { name: "Grilled Salmon", description: "Grilled salmon fillet with roasted potatoes and green beans.", price: "230gh" },
        // { name: "BBQ Ribs", description: "Slow-cooked ribs with smoky BBQ sauce, coleslaw, and cornbread.", price: "270gh" },
      ],
    },
    {
      title: "Appetizers",
      items: [
        {
          name: "Mozzarella Sticks",
          description: "Breaded mozzarella sticks served with marinara sauce.",
          price: "90gh",
        },
        {
          name: "Chicken Wings",
          description:
            "Crispy chicken wings in BBQ, Buffalo, or Teriyaki sauce.",
          price: "180gh",
        },
        {
          name: "Bruschetta",
          description:
            "Toasted baguette with diced tomatoes, garlic, and basil.",
          price: "100gh",
        },
        // { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese and breadcrumbs, baked to golden perfection.", price: "120gh" },
        // { name: "Spring Rolls", description: "Crispy spring rolls filled with vegetables and served with sweet chili sauce.", price: "80gh" },
        // { name: "Hummus and Pita", description: "Creamy hummus served with pita bread and fresh veggies.", price: "110gh" },
        // { name: "Onion Rings", description: "Crispy deep-fried onion rings with dipping sauce.", price: "70gh" },
        // { name: "Calamari", description: "Crispy fried calamari served with marinara sauce.", price: "150gh" },
      ],
    },
  ];

  // loop through the sections and items to dynamically generate content
  menuSections.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.classList.add(section.title.toLowerCase().replace(/\s+/g, "-"));

    const sectionTitle = document.createElement("p");
    sectionTitle.classList.add("title");
    sectionTitle.textContent = section.title;
    menugrid.appendChild(sectionTitle);
    menugrid.appendChild(sectionDiv);
    sectionDiv.appendChild(sectionTitle);

    section.items.forEach((item) => {
      const food = document.createElement("div");
      food.classList.add("food");

      const foodName = document.createElement("p");
      foodName.textContent = item.name;
      foodName.classList.add("foodName");

      const foodPrice = document.createElement("span");
      foodPrice.textContent = item.price;

      const foodDescription = document.createElement("p");
      foodDescription.textContent = item.description;
      foodDescription.classList.add("foodDescription");

      food.appendChild(foodName);
      food.appendChild(foodDescription);
      food.appendChild(foodPrice);

      sectionDiv.appendChild(food);
    });
  });
}
