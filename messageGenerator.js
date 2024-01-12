// Constants Definitions
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const weatherConditions = ["sunny", "cloudy", "rainy", "snowy", "windy", "stormy", "foggy"];
const pizzaFlavors = [
    "Margherita", 
    "Diavola", 
    "Four Seasons", 
    "Capricciosa", 
    "Ham and Mushroom", 
    "Four Cheese", 
    "Vegetarian", 
    "Hawaiian", 
    "Tuna and Onion", 
    "Pepperoni"
];

// ASCII Art Array
const asciiArt = [
    ":-)",
    "(^_^)",
    "(>.<)",
    "¯\\_(ツ)_/¯"
];

// Function to generate a random message with ASCII art
function generateMessage() {
    const randomDay = daysOfWeek[Math.floor(Math.random() * daysOfWeek.length)];
    const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    const randomPizza = pizzaFlavors[Math.floor(Math.random() * pizzaFlavors.length)];
    const randomArt = asciiArt[Math.floor(Math.random() * asciiArt.length)];

    return `On this beautiful ${randomDay}, with ${randomWeather} weather, why not try a ${randomPizza} pizza? ${randomArt}`;
}

// Print the generated message to the console
console.log(generateMessage());

