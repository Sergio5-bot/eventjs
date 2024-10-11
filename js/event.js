// // Array to hold attendee objects
// let attendees = [];

// // Function to add an attendee
// function addAttendee() {
//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const contacts = document.getElementById("contacts").value;
//     const identity = document.getElementById("identity").value;

//     // Validate input
//     if (!name || !email || !contacts || !identity) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Create an attendee object
//     const attendee = { name, email, contacts, identity };
//     attendees.push(attendee);

//     // Clear input fields
//     document.getElementById("attendee-form").reset();
//     alert("Attendee added successfully!");
// }

// // Function to find an attendee
// function findAttendee() {
//     const searchValue = document.getElementById("find-attendee").value.toLowerCase();
//     const results = attendees.filter(attendee => 
//         attendee.name.toLowerCase().includes(searchValue) || 
//         attendee.email.toLowerCase().includes(searchValue)
//     );

//     // Display the results
//     if (results.length > 0) {
//         const resultStr = results.map(attendee => 
//             `Name: ${attendee.name}, Email: ${attendee.email}, Contacts: ${attendee.contacts}, Identity: ${attendee.identity}`
//         ).join('\n');
//         alert("Found Attendees:\n" + resultStr);
//     } else {
//         alert("No attendees found.");
//     }
// }

// // Function to list all attendees
// function listAttendee() {
//     const name = document.getElementById("full").value;
//     const email = document.getElementById("address").value;
//     const contacts = document.getElementById("phone").value;
//     const identity = document.getElementById("event").value;

//     // Validate input
//     if (!name || !email || !contacts || !identity) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     const attendee = { name, email, contacts, identity };
//     attendees.push(attendee);

//     // Clear input fields
//     document.querySelector(".list-attendee form").reset();
//     alert("Attendee listed successfully!");
// }

// Function to load attendees from local storage
function loadAttendees() {
    const storedAttendees = localStorage.getItem('attendees');
    return storedAttendees ? JSON.parse(storedAttendees) : [];
}

// Function to save attendees to local storage
function saveAttendees(attendees) {
    localStorage.setItem('attendees', JSON.stringify(attendees));
}

// Function to add an attendee
function addAttendee() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const contacts = document.getElementById("contacts").value;
    const identity = document.getElementById("identity").value;

    // Validate input
    if (!name || !email || !contacts || !identity) {
        alert("Please fill in all fields.");
        return;
    }

    // Load existing attendees
    const attendees = loadAttendees();

    // Create an attendee object
    const attendee = { name, email, contacts, identity };
    attendees.push(attendee);

    // Save updated attendees list to local storage
    saveAttendees(attendees);

    // Clear input fields
    document.getElementById("attendee-form").reset();
    alert("Attendee added successfully!");
}

// Function to find an attendee
function findAttendee() {
    const searchValue = document.getElementById("find-attendee").value.toLowerCase();
    const attendees = loadAttendees();
    const results = attendees.filter(attendee => 
        attendee.name.toLowerCase().includes(searchValue) || 
        attendee.email.toLowerCase().includes(searchValue)
    );

    // Display the results
    if (results.length > 0) {
        const resultStr = results.map(attendee => 
            `Name: ${attendee.name}, Email: ${attendee.email}, Contacts: ${attendee.contacts}, Identity: ${attendee.identity}`
        ).join('\n');
        alert("Found Attendees:\n" + resultStr);
    } else {
        alert("No attendees found.");
    }
}

// Function to list all attendees
function listAttendee() {
    const name = document.getElementById("full").value;
    const email = document.getElementById("address").value;
    const contacts = document.getElementById("phone").value;
    const identity = document.getElementById("event").value;

    // Validate input
    if (!name || !email || !contacts || !identity) {
        alert("Please fill in all fields.");
        return;
    }

    const attendees = loadAttendees();
    const attendee = { name, email, contacts, identity };
    attendees.push(attendee);

    // Save updated attendees list to local storage
    saveAttendees(attendees);

    // Clear input fields
    document.querySelector(".list-attendee form").reset();
    alert("Attendee listed successfully!");
}
