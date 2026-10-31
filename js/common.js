/* Task 0 — shared setup for every page of the assignment.
   Includes the jQuery CDN, the $(document).ready() handler and the
   "jQuery is ready!" console message. */

$(document).ready(function () {
  // 1. Prove that jQuery has loaded and the DOM is ready.
  console.log("jQuery is ready!");
  console.log("jQuery version:", $.fn.jquery);

  // 2. Highlight the navbar link of the page that is currently open.
  // "index" is used for the root URL, and the .html extension is dropped so
  // the match also works for servers that serve clean URLs (e.g. /part3).
  function pageName(path) {
    return (path.split("/").pop() || "").replace(/\.html$/, "") || "index";
  }

  var currentPage = pageName(window.location.pathname);
  $(".navbar__link").each(function () {
    if (pageName($(this).attr("href") || "") === currentPage) {
      $(this).addClass("is-active");
    }
  });

  // 3. Mobile navbar toggle (uses jQuery .slideToggle()).
  $(".navbar__toggle").on("click", function () {
    $(".navbar__links").slideToggle(180);
  });

  // 4. Keep the mobile menu usable if the window is resized to desktop.
  $(window).on("resize", function () {
    if ($(window).width() > 900) {
      $(".navbar__links").removeAttr("style");
    }
  });
});

/* Small helper shared by the demo pages: mirror messages into an on-page
   console panel so the result is visible without opening DevTools. */
function mirrorToConsole(message) {
  var $panel = $("#console-log");
  if ($panel.length) {
    $panel.append($("<li>").text(message));
  }
}
