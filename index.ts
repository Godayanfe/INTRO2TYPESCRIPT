// ============================================================
// 🧠 CLASS ACTIVITY: CONVERT THIS JAVASCRIPT CODE TO TYPESCRIPT
// ============================================================

// 1️⃣ STRINGS
// Convert this simple greeting to TypeScript and add proper types.
let firstName = "Faith";
let lastName = "Maduegbunam";
let fullName = firstName + " " + lastName;
console.log("👋 Hello, " + fullName + "!");

// Write your solution below this line


// 2️⃣ NUMBERS
// Add types for the variables and ensure totalPrice is a number.
let price = 1500;
let quantity = 3;
let totalPrice = price * quantity;
console.log("Total Price:", totalPrice);

// Write your solution below this line


// 3️⃣ BOOLEAN
// Add types for the boolean variable and make it type-safe.
let isAvailable = true;
if (isAvailable) {
  console.log("Item is available for purchase.");
} else {
  console.log("Item is out of stock.");
}


// Write your solution below this line


// 4️⃣ UNION TYPE
// This function should accept either a string or a number as 'id'.
// Add a union type for the parameter and ensure type safety.
// ignore the any type error here
function printId(id) {
  console.log("User ID is:", id);
}
printId(101);
printId("abc123");

// Write your solution below this line


// 5️⃣ ARRAYS
// Convert this to TypeScript using proper array types.
let studentNames = ["Ada", "Bola", "Chinedu"];
let scores = [90, 75, 88];
console.log(studentNames);
console.log(scores);

// Write your solution below this line


// 6️⃣ INTERSECTION TYPE
// Combine two objects into one using intersection types in TypeScript.
let user = {
  name: "Emmanuel",
  email: "emma@example.com",
};

let account = {
  accountNumber: "AC12345",
  balance: 5000,
};

// Write your solution below this line



// In TypeScript, you'll create two types (User and Account)
// and then combine them into a single variable called `customer`
// that includes properties from both.
let customer = { ...user, ...account };
console.log(customer);

