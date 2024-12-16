const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const size_color1 = document.getElementById("size_color1");
const size_color2 = document.getElementById("size_color2");
const size_color3 = document.getElementById("size_color3");
const price = document.getElementById("price");

// Function to reset and apply classes dynamically
function resetClasses(targetToShow, elementsToHide) {
  // Hide all elements
  elementsToHide.forEach((element) => {
    element.classList.remove("grid");
    element.classList.add("hidden");
  });

  // Show the target element
  targetToShow.classList.remove("hidden");
  targetToShow.classList.add("grid");
}

// Function to reset all boxes' styles to inactive
function resetBoxes() {
  [box1, box2, box3].forEach((box) => {
    box.style.borderColor = "#C8C8C8";
    box.style.borderWidth = "1.5px";
    box.style.backgroundColor = "transparent";
  });
}

// Initially activate box2
resetBoxes(); // Reset all boxes first
box2.style.borderColor = "#FF6B82"; // Set active box styles
box2.style.borderWidth = "5px";
box2.style.backgroundColor = "#fff9fa"; // Set background for box2 as active

// Initially select radio2 to mark box2 as active
radio2.checked = true;
  price.innerHTML = 'Total : $18.00 USD'

// Call resetClasses for size_color2 to show the corresponding size/color option
resetClasses(size_color2, [size_color1, size_color3]);

// Event listeners for radio buttons
radio1.addEventListener("change", () => {
  if (radio1.checked) {
    resetBoxes(); // Reset all boxes
    box1.style.borderColor = "#FF6B82"; // Set active box styles
    box1.style.borderWidth = "5px";
    box1.style.backgroundColor = "#fff9fa";
    price.innerHTML = "Total : $10.00 USD";
    radio1.nextElementSibling.style.backgroundColor = "#fff9fa";
    radio1.nextElementSibling.style.borderColor = "#FF6B82";
    // Call resetClasses for size_color1 and hide others
    resetClasses(size_color1, [size_color2, size_color3]);
  }
});

radio2.addEventListener("change", () => {
  if (radio2.checked) {
    resetBoxes(); // Reset all boxes
    box2.style.borderColor = "#FF6B82"; // Set active box styles
    box2.style.borderWidth = "5px";
    box2.style.backgroundColor = "#fff9fa";
    price.innerHTML = "Total : $18.00 USD";
    // Call resetClasses for size_color2 and hide others
    resetClasses(size_color2, [size_color1, size_color3]);
  }
});

radio3.addEventListener("change", () => {
  if (radio3.checked) {
    resetBoxes(); // Reset all boxes
    box3.style.borderColor = "#FF6B82"; // Set active box styles
    box3.style.borderWidth = "5px";
    box3.style.backgroundColor = "#fff9fa";
    price.innerHTML = "Total : $24.00 USD";
    // Call resetClasses for size_color3 and hide others
    resetClasses(size_color3, [size_color1, size_color2]);
  }
});
