/* // Wait for the animation to finish and redirect to content
setTimeout(function() {
  window.location.href = "./content/content.html"; // Replace "content.html" with the URL of your content page
}, 4500); // Replace "3000" with the duration of your animation in milliseconds

 */


if (window.innerWidth > 768) { // check if screen size is larger than 768px
  setTimeout(function() {
  window.location.href = "./content/content.html"; // Replace "content.html" with the URL of your content page
  }, 4500); // Replace "4500" with the duration of your animation in milliseconds
  } else {
    setTimeout(function() {
      window.location.href = "./content/content.html"; // Replace "content.html" with the URL of your content page
      }, 5000);
  // do something else if screen size is smaller than or equal to 768px
  // for example, show a message asking the user to view the content on a larger screen
  }