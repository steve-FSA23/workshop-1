// ************************ Unit test specifications ***************************

// 1) A function called "multiplication" that returns the product of two input numbers
function multiplication(num1, num2) {
    // Check if the inputs are numbers
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Both inputs must be numbers.");
    }
    return num1 * num2;
}
// // // Example usage:
try {
    const result = multiplication(5, 7); // Calling the function with numbers
    console.log("The product is:", result); // Output: "The product is: 35"

    // Example with a string input (generates an error)
    const result2 = multiplication(5, "7"); // Calling the function with a string
    console.log("The product is:", result2); // This line won't be reached
} catch (error) {
    console.error("Error:", error.message); // Output: "Error: Both inputs must be numbers."
}

// 2) Create a function called "concatOdds"
function concatOdds(arr1, aar2) {
    // Function to filter odd numbers and sort them in ascending order
    function filterAndSortOdds(array) {
        return array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
    }

    // Convert user prompts into arrays of numbers
    const userArray1 = prompt(
        "Enter numbers separated by commas (e.g., 1, 3, 5):"
    )
        .split(",")
        .map(Number);

    const userArray2 = prompt("Enter more numbers separated by commas:")
        .split(",")
        .map(Number);

    // Concatenate and filter/sort odd numbers
    const combinedArray = userArray1.concat(userArray2);
    const oddNumbers = filterAndSortOdds(combinedArray);

    return oddNumbers;
}

// // Example usage:
const result = concatOdds([], []);
console.log("Concatenated odd numbers:", result);

// ************************************** Functional test specifications ***************************************

// When a user clicks "check out as a guest" without login in, they should be taken to form page to fill out personal information.

// When a user click "check out as a guest" without login in, they should be prompted to login or create an account.

// When a user clicks "Log In" and has filled in their login and password correctly, they should be taken to the details form page.

// When a user clicks "Create Account" without filling in any information, they should be shown an error.

// When a user clicks "Create Account" with an invalid email address or password, they should be shown an error.

// When a user clicks the "Sign Up with Google" button, they should be taken through the Google authentication process.

// When a user clicks "Log In with Google", they should be logged in through Google, or taken through the Google authentication process if they do not already have an account.

// Product data
const product = {
    name: "Cotton Shirt",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 11.99,
};

// Cart data
let cart = [];
let cartTotal = 0;

// Function to display the product
function displayProduct() {
    const productContainer = document.querySelector(".product");
    productContainer.querySelector("h2").textContent = product.name;
    productContainer.querySelector(
        "p:nth-of-type(1)"
    ).textContent = `Description: ${product.description}`;
    productContainer.querySelector(
        "p:nth-of-type(2)"
    ).textContent = `Price: $${product.price.toFixed(2)}`;
}

// Function to add a product to the cart
function addToCart() {
    cart.push(product);
    cartTotal += product.price;
    displayCart();
}

const guestBtn = document.querySelector(".guest");
guestBtn.addEventListener("click", checkCartEmpty);
// If cart is empty alert "user" they need to add a product before continuing to checkout
function checkCartEmpty() {
    if (cart.length === 0) {
        return alert("Please add a product to your cart");
    } else {
        addToCartButton.addEventListener("click", addToCart);
    }
}

// Function to display the cart
function displayCart() {
    const cartContainer = document.querySelector(".cart");
    const cartItemsList = document.querySelector("#cartItems");
    const cartTotalDisplay = document.querySelector("#cartTotal");

    cartItemsList.innerHTML = "";
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });

    cartTotalDisplay.textContent = `$${cartTotal.toFixed(2)}`;
}

// Event listener for the "Add to Cart" button
const addToCartButton = document.querySelector("#addToCartBtn");
addToCartButton.addEventListener("click", addToCart);

// Initialize the product display
displayProduct();
