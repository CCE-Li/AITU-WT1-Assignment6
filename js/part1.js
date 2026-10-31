/* Part 1 — Setup (Task 0) and Selectors & CSS (Task 1). */

$(document).ready(function () {

  /* ---------- Task 0: prove that jQuery is ready ---------- */
  $("#jquery-version").text($.fn.jquery);
  mirrorToConsole("jQuery is ready!");

  $("#btn-log").on("click", function () {
    console.log("jQuery is ready!");
    mirrorToConsole("jQuery is ready!");
  });

  /* ---------- Task 1: selectors & CSS ---------- */
  // Save the original markup so the demo can be reset.
  var originalDemo = $("#selector-demo").html();

  $("#btn-id-text").on("click", function () {
    // ID selector -> change the text content of a single element.
    $("#demo-title")
      .text("Changed with the ID selector #demo-title using .text()")
      .css({ "color": "#5b5bd6", "letter-spacing": "0.2px" });

    $("#selector-output").text(
      'Selected by ID: $("#demo-title") -> ' + $("#demo-title").length + " element found."
    );
    console.log("ID selector: text of #demo-title changed.");
    mirrorToConsole("ID selector: .text() applied to #demo-title");
  });

  $("#btn-class-html").on("click", function () {
    // Class selector -> change the inner HTML of every matching element.
    $(".demo-text").html(
      'Changed with <strong>.html()</strong> using the class selector <code>.demo-text</code>.'
    );

    $("#selector-output").text(
      'Selected by class: $(".demo-text") -> ' + $(".demo-text").length + " elements found."
    );
    console.log("Class selector: html of .demo-text changed.");
    mirrorToConsole("Class selector: .html() applied to " + $(".demo-text").length + " elements");
  });

  $("#btn-tag-css").on("click", function () {
    // Tag selector -> restyle every paragraph on the page.
    $("p").css({
      "color": "#c2410c",
      "font-weight": "600"
    });

    $("#selector-output").text(
      'Selected by tag: $("p") -> ' + $("p").length + " elements found. Colour and weight changed with .css()."
    );
    console.log('Tag selector: css applied to ' + $("p").length + ' paragraphs.');
    mirrorToConsole("Tag selector: .css() applied to " + $("p").length + " <p> elements");
  });

  $("#btn-reset-1").on("click", function () {
    // Restore the markup and clear the inline styles that .css() added.
    $("#selector-demo").html(originalDemo);
    $("#selector-demo h3, #selector-demo p").removeAttr("style");
    $("p").removeAttr("style");
    $("#selector-output").text("Demo reset to its original state.");
  });
});
