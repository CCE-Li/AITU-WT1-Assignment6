/* Part 3 — DOM manipulation: add/remove elements, attributes, form values. */

$(document).ready(function () {

  /* ---------- Task 5: .append() / .prepend() / .remove() ---------- */
  var itemCounter = 2;

  function countItems() {
    return $("#item-list li").length;
  }

  $("#btn-append").on("click", function () {
    itemCounter++;
    // Add a brand-new element at the end of the list.
    $("#item-list").append(
      $("<li>").addClass("is-new").append(
        $("<span>").text("Item " + itemCounter + " — added with .append()"),
        $("<span>").addClass("tag").text("append")
      )
    );
    $("#list-output").text("append() -> the list now has " + countItems() + " items.");
  });

  $("#btn-prepend").on("click", function () {
    itemCounter++;
    // Add a brand-new element at the beginning of the list.
    $("#item-list").prepend(
      $("<li>").addClass("is-new").append(
        $("<span>").text("Item " + itemCounter + " — added with .prepend()"),
        $("<span>").addClass("tag").text("prepend")
      )
    );
    $("#list-output").text("prepend() -> the list now has " + countItems() + " items.");
  });

  $("#btn-remove").on("click", function () {
    if (countItems() === 0) {
      $("#list-output").text("There is nothing left to remove.");
      return;
    }
    $("#item-list li").last().remove();
    $("#list-output").text("remove() -> one item deleted, " + countItems() + " left.");
  });

  $("#btn-remove-all").on("click", function () {
    $("#item-list li").remove();
    $("#list-output").text("All items removed. The list is empty.");
  });

  /* ---------- Task 6: .attr() on src and href ---------- */
  $("#btn-change-src").on("click", function () {
    var $img = $("#attr-image");
    var next = $img.attr("src") === "images/sunset.svg"
      ? "images/ocean.svg"
      : "images/sunset.svg";

    // Fade the picture out, swap the attribute, then fade it back in.
    $img.fadeOut(250, function () {
      $img.attr("src", next).fadeIn(250);
    });

    $("#attr-output").text("src changed to: " + next);
  });

  $("#btn-change-href").on("click", function () {
    var $link = $("#attr-link");
    var toJQuery = $link.attr("href").indexOf("api.jquery.com") !== -1;

    if (toJQuery) {
      $link.attr("href", "https://www.w3schools.com/jquery/");
      $link.text("Visit the W3Schools jQuery tutorial");
      $("#attr-output").text("href changed to: https://www.w3schools.com/jquery/");
    } else {
      $link.attr("href", "https://api.jquery.com");
      $link.text("Visit the jQuery API documentation");
      $("#attr-output").text("href changed to: https://api.jquery.com");
    }
  });

  /* ---------- Task 7: form interaction with .val() and .text() ---------- */
  function updatePreview() {
    var name = $("#input-name").val().trim();
    var email = $("#input-email").val().trim();

    $("#preview-name").text(name.length ? name : "—");
    $("#preview-email").text(email.length ? email : "—");
    $("#preview-count").text(name.length + email.length);
  }

  // "input" fires on every keystroke, so the preview updates live.
  $("#input-name, #input-email").on("input", updatePreview);

  $("#btn-clear-form").on("click", function () {
    $("#input-name, #input-email").val("");
    updatePreview();
  });

  updatePreview();
});
