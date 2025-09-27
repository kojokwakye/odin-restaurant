import { refreshpage } from "./index.js";

export function menupage() {
  refreshpage();
  const content = document.getElementById("content");

  const breakfast = document.createElement("div");
  breakfast.classList.add("menudiv");
  const breakfasttitle = document.createElement("p");
  breakfasttitle.textContent = "Menu list";
  breakfasttitle.classList.add("menu-list");
  content.appendChild(breakfasttitle);
  content.appendChild(breakfast);

  function createFood(text, description, price) {
    const food = document.createElement("div");
    food.classList.add("food");

    const foodName = document.createElement("p");
    foodName.textContent = text;
    foodName.classList.add("foodName");

    const foodPrice = document.createElement("span");
    foodPrice.textContent = price;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;
    foodDescription.classList.add("foodDecription");

    // append elements to the food div
    food.appendChild(foodName);
    food.appendChild(foodDescription);
    food.appendChild(foodPrice);

    return food;
  }

  const menulist = [
    createFood(
      "Italian Beef Sandwich",
      "Classic Italian beef sandwich, dipped in homemade au jus, and served on classic French bread",
      "100gh"
    ),
    createFood(
      "Sandwich",
      "Italian beef and spicy Italian sausage dipped in homemade au jus served on classic French bread",
      "200gh"
    ),
    createFood(
      "Steak Sandwich",
      "8-10oz ribeye steak, grilled and served on classic French bread. Your choice of ketchup and onions or steak sauce and onions",
      "150gh"
    ),
    createFood(
      "Hamburger",
      "⅓ lb beef patty grilled with mustard, ketchup, onion, lettuce, tomato, and pickle on a delicious bun",
      "230gh"
    ),
    createFood(
      "Italian Beef Sandwich",
      "Classic Italian beef sandwich, dipped in homemade au jus, and served on classic French bread",
      "100gh"
    ),
    createFood(
      "Cheeseburger",
      "⅓ lb beef patty grilled with mustard, ketchup, onion, lettuce, tomato, pickle and American cheese on a delicious bun",
      "120gh"
    ),
    createFood(
      "Double Hamburger",
      "Two ⅓ lb beef patties grilled with mustard, ketchup, onion, lettuce, tomato, and pickle on a delicious bun",
      "300gh"
    ),
    createFood(
      "Hot Dog and Fries",
      "Hot dog prepared Chicago style with onion, mustard, relish, pickle, celery salt, and sport peppers",
      "40gh"
    ),
    createFood(
      "Chili Cheese Dog",
      "Hot dog topped with both chili and cheddar cheese sauce",
      "70gh"
    ),
    createFood(
      "Veggie Burger",
      "A plant-based patty grilled with lettuce, tomato, onion, and pickles on a fresh bun",
      "180gh"
    ),
    createFood(
      "BBQ Chicken Sandwich",
      "Grilled chicken breast topped with tangy BBQ sauce, lettuce, and pickles on a soft bun",
      "160gh"
    ),

    createFood(
      "Pulled Pork Sandwich",
      "Slow-cooked pulled pork smothered in BBQ sauce, topped with coleslaw on a fresh bun",
      "170gh"
    ),
    createFood(
      "Chicken Tenders with Fries",
      "Breaded and fried chicken tenders served with crispy fries and choice of dipping sauce",
      "200gh"
    ),
    createFood(
      "Philly Cheesesteak",
      "Thinly sliced steak grilled with onions and peppers, topped with melted cheese and served on a hoagie roll",
      "250gh"
    ),
    createFood(
      "Grilled Cheese Sandwich",
      "Classic grilled cheese made with buttery toasted bread and melted American cheese",
      "90gh"
    ),
    createFood(
      "Club Sandwich",
      "Triple-layer sandwich with turkey, bacon, lettuce, tomato, and mayo served on toasted bread",
      "220gh"
    ),
    createFood(
      "BLT Sandwich",
      "Crispy bacon, fresh lettuce, and juicy tomato with mayo on toasted bread",
      "180gh"
    ),
    createFood(
      "Caesar Salad",
      "Crisp romaine lettuce, crunchy croutons, parmesan cheese, and Caesar dressing",
      "120gh"
    ),
    createFood(
      "Garden Salad",
      "Mixed greens with cucumbers, tomatoes, carrots, and choice of dressing",
      "100gh"
    ),
    createFood("Fries", "Golden crispy fries, perfectly salted", "50gh"),
    createFood(
      "Onion Rings",
      "Crispy battered onion rings served with a tangy dipping sauce",
      "70gh"
    ),
    createFood(
      "Mozzarella Sticks",
      "Fried mozzarella cheese sticks served with marinara sauce",
      "90gh"
    ),
    createFood(
      "Chicken Wings",
      "A dozen crispy wings tossed in your choice of BBQ, Buffalo, or Teriyaki sauce",
      "200gh"
    ),
    createFood(
      "Tacos",
      "Soft or hard taco shells filled with seasoned beef, lettuce, tomato, cheese, and sour cream",
      "120gh"
    ),
    createFood(
      "Nachos",
      "Tortilla chips smothered in melted cheese, jalapeños, and served with sour cream and salsa",
      "160gh"
    ),
    createFood(
      "Mac and Cheese",
      "Creamy macaroni and cheese with a crispy breadcrumb topping",
      "140gh"
    ),
    createFood(
      "Garlic Bread",
      "Toasted bread with garlic butter and a sprinkle of parmesan cheese",
      "60gh"
    ),
    createFood(
      "Crispy Chicken Sandwich",
      "Crispy fried chicken breast, lettuce, tomato, pickles, and spicy mayo on a soft bun",
      "180gh"
    ),
    createFood(
      "Spicy Chicken Wrap",
      "Grilled chicken, spicy mayo, lettuce, and tomato wrapped in a soft tortilla",
      "170gh"
    ),
    createFood(
      "Buffalo Chicken Wrap",
      "Grilled or fried chicken tossed in buffalo sauce, wrapped with lettuce, tomatoes, and ranch dressing",
      "180gh"
    ),
    createFood(
      "Cheese Fries",
      "Crispy fries loaded with melted cheddar cheese and served with a side of ranch dressing",
      "80gh"
    ),
    createFood(
      "Egg Salad Sandwich",
      "Creamy egg salad served with lettuce on fresh bread",
      "100gh"
    ),
    createFood(
      "Tuna Salad Sandwich",
      "Tuna salad with fresh lettuce served on soft bread",
      "110gh"
    ),
    createFood(
      "Pastrami Sandwich",
      "Smoked pastrami piled high on rye bread with mustard and pickles",
      "200gh"
    ),
    createFood(
      "Ruben Sandwich",
      "Corned beef, Swiss cheese, sauerkraut, and Russian dressing on rye bread, grilled to perfection",
      "220gh"
    ),
    createFood(
      "Sausage and Peppers Sandwich",
      "Italian sausage grilled with peppers and onions, served on a toasted roll",
      "180gh"
    ),
  ];
  menulist.forEach((food) => {
    breakfast.appendChild(food);
  });

  // main course
  const maincourse = document.createElement("div");
  maincourse.classList.add("maincourse");
  const maincoursetititle = document.createElement("p");
  maincourse.classList.add("main-course");
  maincoursetititle.textContent = "Main Course";
  content.appendChild(maincoursetititle);
  content.appendChild(maincourse);
}
