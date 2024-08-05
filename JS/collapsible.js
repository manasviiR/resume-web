  // Get all collapsible buttons
  var coll = document.getElementsByClassName("collapsible");

  // Loop through them and add a click event listener
  for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
              content.style.display = "none";
          } else {
              content.style.display = "block";
          }
      });
  }