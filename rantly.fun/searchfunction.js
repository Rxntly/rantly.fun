// Export the filterImages function
export function filterImages() {
   const searchInput = document.querySelector(".searchbar").value.toLowerCase();
   let matchesFound = false; // Track if any matches are found
 
   // Loop through all images
   const images = document.querySelectorAll(".image-row img");
   images.forEach((image) => {
     const altText = image.alt.toLowerCase();
 
     // Show or hide each individual image based on the search result
     if (altText.includes(searchInput)) {
       image.style.display = "flex";
       matchesFound = true; // Set to true if at least one match is found
     } else {
       image.style.display = "none";
     }
   });
 
   // Display a message if no matches are found
   const noMatchesMessage = document.querySelector(".no-matches-message");
   if (!matchesFound) {
     noMatchesMessage.style.display = "block";
   } else {
     noMatchesMessage.style.display = "none";
   }
 }
 
 // Attach the filterImages function to the search button click event
 document.querySelector(".search-button").addEventListener("click", filterImages);
 
 // You can also call filterImages on input change for real-time filtering
 document.querySelector(".searchbar").addEventListener("input", filterImages);
 