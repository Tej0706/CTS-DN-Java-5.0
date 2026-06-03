// Welcome Message

console.log("Welcome to the Community Portal");

window.onload = function () {
    alert("Page fully loaded");
};

// Event Data

const portalName = "Local Community Event Portal";
const todayDate = "2026";
let seats = 50;

console.log(`${portalName} - ${todayDate}`);

// Event Class

class Event {
    constructor(name, category, seats, date) {
        this.name = name;
        this.category = category;
        this.seats = seats;
        this.date = date;
    }
}

// Prototype Method

Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};

// Event Array

let events = [];

events.push(
    new Event("Music Night", "Music", 10, "2026-07-10"),
    new Event("Football Match", "Sports", 0, "2025-01-10"),
    new Event("Baking Workshop", "Workshop", 15, "2026-08-15")
);

// Object Entries

console.log(Object.entries(events[0]));

// DOM Elements

const container = document.querySelector("#eventContainer");

// Display Events

function displayEvents(eventList) {

    container.innerHTML = "";

    eventList.forEach(event => {

        // if else for valid events

        if (new Date(event.date) > new Date() && event.seats > 0) {

            let card = document.createElement("div");
            card.className = "eventCard";

            card.innerHTML = `
                <h3>${event.name}</h3>
                <p>Category: ${event.category}</p>
                <p>Seats: ${event.seats}</p>
                <button onclick="registerUser('${event.name}')">
                    Register
                </button>
            `;

            container.appendChild(card);
        }
    });

    // jQuery Fade

    $(".eventCard").fadeIn();
}

displayEvents(events);

// Add Event Function

function addEvent(name, category, seats, date) {
    events.push(new Event(name, category, seats, date));
}

// Register Function + Try Catch

function registerUser(eventName) {

    try {

        let event = events.find(e => e.name === eventName);

        if (!event) {
            throw "Event not found";
        }

        if (event.seats <= 0) {
            throw "No seats available";
        }

        event.seats--;

        alert("Registration successful");

        displayEvents(events);

    } catch (error) {
        alert(error);
    }
}

// Filter Function

function filterEventsByCategory(category, callback) {

    let filtered;

    if (category === "all") {
        filtered = [...events];
    } else {
        filtered = [...events].filter(
            e => e.category === category
        );
    }

    callback(filtered);
}

// Category Filter

document.querySelector("#categoryFilter")
.onchange = function () {

    filterEventsByCategory(this.value, displayEvents);
};

// Search Keydown

document.querySelector("#searchBox")
.addEventListener("keydown", function () {

    let value = this.value.toLowerCase();

    let filtered = events.filter(
        e => e.name.toLowerCase().includes(value)
    );

    displayEvents(filtered);
});

// Closure

function registrationCounter() {

    let total = 0;

    return function () {
        total++;
        console.log("Total Registrations:", total);
    };
}

const countRegistration = registrationCounter();

// Phone Validation

function validatePhone() {

    let phone = document.querySelector("#phone").value;

    if (phone.length < 10) {
        alert("Invalid phone number");
    }
}

// Event Fee

function showFee() {

    let event = document.querySelector("#eventSelect").value;
    let fee = "";

    if (event === "Music") fee = "Fee: ₹200";
    else if (event === "Sports") fee = "Fee: ₹150";
    else if (event === "Workshop") fee = "Fee: ₹300";

    document.querySelector("#feeDisplay").innerHTML = fee;

    // Local Storage

    localStorage.setItem("preferredEvent", event);
}

// Load Preference

window.addEventListener("load", () => {

    let saved = localStorage.getItem("preferredEvent");

    if (saved) {
        document.querySelector("#eventSelect").value = saved;
    }
});

// Character Count

function countChars() {

    let text =
        document.querySelector("#feedback").value;

    document.querySelector("#charCount")
        .innerHTML = text.length;
}

// Submit Confirmation

function showConfirm() {
    alert("Form submitted");
}

// Image Double Click

function enlargeImage(img) {

    if (img.style.transform === "scale(1.5)") {
        img.style.transform = "scale(1)";
    } else {
        img.style.transform = "scale(1.5)";
    }
}

// Video Event

function videoReady() {
    document.querySelector("#videoMsg")
        .innerHTML = "Video ready to play";
}

// Before Unload

window.onbeforeunload = function () {
    return "Form not completed";
};

// Form Handling

document.querySelector("#registrationForm")
.addEventListener("submit", function (event) {

    event.preventDefault();

    console.log("Form submit started");

    let form = this.elements;

    let name = form["name"].value;
    let email = form["email"].value;
    let eventType = form["event"].value;

    if (name === "" || email === "") {
        document.querySelector("#outputMsg")
            .innerHTML = "Please fill all fields";
        return;
    }

    document.querySelector("#outputMsg")
        .innerHTML =
        `Thank you ${name} for registering for ${eventType}`;

    console.log({
        name,
        email,
        eventType
    });

    sendRegistration(name, email, eventType);
});

// Clear Preferences

document.querySelector("#clearPref")
.onclick = function () {

    localStorage.clear();
    sessionStorage.clear();

    alert("Preferences cleared");
};

// Geolocation

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            position => {

                document.querySelector("#locationResult")
                    .innerHTML =
                    `Latitude: ${position.coords.latitude}
                    Longitude: ${position.coords.longitude}`;
            },

            error => {
                alert("Location access denied");
            },

            {
                enableHighAccuracy: true,
                timeout: 5000
            }
        );
    }
}

// Fetch API using then catch

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
    console.log("Fetched Events", data);
})
.catch(error => {
    console.log(error);
});

// Async Await + Spinner

async function loadEvents() {

    console.log("Loading...");

    try {

        let response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

        let data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);
    }
}

loadEvents();

// AJAX POST

function sendRegistration(name, email, eventType) {

    setTimeout(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name,
                    email,
                    eventType
                })
            }
        )

        .then(response => response.json())

        .then(data => {

            console.log("Payload:", data);

            alert("Registration sent successfully");
        })

        .catch(error => {

            alert("Submission failed");

            console.log(error);
        });

    }, 2000);
}

// jQuery Click + Fade

$("#registerBtn").click(function () {

    $(".eventCard").fadeOut(300)
                   .fadeIn(300);
});

// Array Methods

let musicEvents =
    events.filter(e => e.category === "Music");

console.log(musicEvents);

let formatted =
    events.map(
        e => `Workshop on ${e.name}`
    );

console.log(formatted);