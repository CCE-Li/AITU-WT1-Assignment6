/* Part 2 — jQuery effects: visibility, fade and slide. */

$(document).ready(function () {

  /* ---------- Task 2: .hide() / .show() / .toggle() ---------- */
  $("#btn-hide").on("click", function () {
    $("#visibility-text").hide(400);
  });

  $("#btn-show").on("click", function () {
    $("#visibility-text").show(400);
  });

  $("#btn-toggle-vis").on("click", function () {
    $("#visibility-text").toggle(400);
  });

  /* ---------- Task 3: .fadeIn() / .fadeOut() / .fadeToggle() ---------- */
  $("#btn-fade-in").on("click", function () {
    $("#fade-image").fadeIn(600);
  });

  $("#btn-fade-out").on("click", function () {
    $("#fade-image").fadeOut(600);
  });

  $("#btn-fade-toggle").on("click", function () {
    $("#fade-image").fadeToggle(600);
  });

  // Extra: fade to a given opacity without hiding the element completely.
  $("#btn-fade-to").on("click", function () {
    $("#fade-image").fadeTo(600, 0.3);
  });

  /* ---------- Task 4: .slideUp() / .slideDown() / .slideToggle() ---------- */
  $("#btn-slide-up").on("click", function () {
    $("#slide-panel").slideUp(500);
  });

  $("#btn-slide-down").on("click", function () {
    $("#slide-panel").slideDown(500);
  });

  $("#btn-slide-toggle").on("click", function () {
    $("#slide-panel").slideToggle(500);
  });
});
