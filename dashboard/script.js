const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});

// document.getElementById("profile-button").addEventListener("click", function() {
// 	var medicationTracker = document.getElementById("profile");
// 	medicationTracker.style.display = "block";
//   });



// document.getElementById("medication-tracker-button").addEventListener("click", function() {
// 	var medicationTracker = document.getElementById("medication-tracker");
// 	medicationTracker.style.display = "block";
//   });
  


// Define an array of section IDs
const sectionIds = [
    "profile",
    "medication-tracker",
    "my-progress",
    "group-discussions",
    "Counselling",
    "calendar"
];

// Function to show a specific section and hide others
function showSection(sectionId) {
    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}

// Add event listeners to buttons
document.getElementById("profile-button").addEventListener("click", function() {
    showSection("profile");
});

document.getElementById("medication-tracker-button").addEventListener("click", function() {
    showSection("medication-tracker");
});

document.getElementById("my-progress-button").addEventListener("click", function() {
    showSection("my-progress");
});

document.getElementById("group-discussions-button").addEventListener("click", function() {
    showSection("group-discussions");
});

document.getElementById("Counselling-button").addEventListener("click", function() {
    showSection("Counselling");
});

document.getElementById("calendar-button").addEventListener("click", function() {
    showSection("calendar");
});

// Initially, display the "profile" section
showSection("profile");
