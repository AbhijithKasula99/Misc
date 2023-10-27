/* Scroll to Top */

window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".scroll-to-top");
  scroll.classList.toggle("active", window.scrollY > 120);
});

/* Copying the code */

var clipboard = new ClipboardJS(".btn");

clipboard.on("success", function (e) {
  console.log(e);
  alert("Code snippet copied to clipboard!");
});

clipboard.on("error", function (e) {
  console.log(e);
  alert("Failed to copy code snippet to clipboard!");
});

/* Download with download button */

/* function downloadPDF() {
  // Specify the URL of the PDF file to be downloaded
  var pdfURL = "Resume_Abhijith Kasula.pdf";

  // Create a new anchor element to initiate the download
  var link = document.createElement("a");
  link.href = pdfURL;
  link.download = pdfURL.split("/").pop();

  // Add the anchor element to the document and click it
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
} */
