// Import necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";

// Configuration settings for the Firebase app, including the database URL
const appSettings = {
  databaseURL: "", // Add your Firebase database URL
};

// Initialize the Firebase app with the specified settings
const app = initializeApp(appSettings);

// Get a reference to the Firebase Realtime Database
const database = getDatabase(app);

// Create a reference to the "movies" node in the database
const moviesInDB = ref(database, "movies");

// Get references to the input field and the add button in the HTML
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

// Add an event listener to the button for the 'click' event
addButtonEl.addEventListener("click", function () {
  // Get the value from the input field
  let inputValue = inputFieldEl.value;

  // Push the input value to the "movies" node in the database
  push(moviesInDB, inputValue);

  // Log a message to the console confirming the addition
  console.log(`${inputValue} added to database`);
});
