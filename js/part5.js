/* Part 5 — Mini project: accordion menu built with slide animations. */

$(document).ready(function () {

  var $items = $("#accordion .accordion__item");
  var slideSpeed = 400;

  function openItem($item, animate) {
    $item.addClass("is-open");
    var $content = $item.find(".accordion__content").stop(true, true);

    if (animate === false) {
      $content.show();
    } else {
      $content.slideDown(slideSpeed);
    }
  }

  function closeItem($item) {
    $item.removeClass("is-open");
    $item.find(".accordion__content").stop(true, true).slideUp(slideSpeed);
  }

  function updateStatus(message) {
    $("#accordion-status").text(message);
  }

  // The header button contains both the title and the "+" icon, so read
  // only the title span when reporting which section was toggled.
  function headerTitle($header) {
    return $header.find("span").first().text().trim();
  }

  // Clicking a header opens its section and closes every other section.
  $(".accordion__header").on("click", function () {
    var $item = $(this).parent();

    if ($item.hasClass("is-open")) {
      closeItem($item);
      updateStatus("Section closed: " + headerTitle($(this)));
      return;
    }

    // Close the section that is currently open, then open the clicked one.
    $items.not($item).each(function () {
      if ($(this).hasClass("is-open")) {
        closeItem($(this));
      }
    });

    openItem($item);
    updateStatus("Section opened: " + headerTitle($(this)));
  });

  // Open the first section so the accordion is not empty on page load.
  openItem($items.first(), false);
  updateStatus("First section opened automatically on page load.");

  /* ---------- Extra controls ---------- */
  $("#btn-expand-all").on("click", function () {
    $items.each(function () {
      openItem($(this));
    });
    updateStatus("All sections expanded.");
  });

  $("#btn-collapse-all").on("click", function () {
    $items.each(function () {
      closeItem($(this));
    });
    updateStatus("All sections collapsed.");
  });

  $("#btn-toggle-first").on("click", function () {
    $items.first().find(".accordion__header").trigger("click");
  });
});
