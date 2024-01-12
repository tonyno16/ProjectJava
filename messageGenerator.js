// Constant Definitions
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weatherConditions = ["sunny", "cloudy", "rainy", "snowy", "windy", "stormy", "foggy"];
const pizzaFlavors = [
    "Margherita", 
    "Diavola", 
    "Four Seasons", 
    "Capricciosa", 
    "Ham and Mushrooms", 
    "Four Cheeses", 
    "Vegetarian", 
    "Hawaii", 
    "Tuna and Onion", 
    "Pepperoni"
];

// Definition of the generateMessage function
function generateMessage() {
    const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomPizza = pizzaFlavors[Math.floor(Math.random() * pizzaFlavors.length)];

    return `On this beautiful ${randomDay}, with ${randomWeather} weather, why not try a ${randomPizza} pizza?`;
}

// Print the generated message to the console
console.log(generateMessage());
