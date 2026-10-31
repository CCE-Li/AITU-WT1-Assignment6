# Assignment #6 — jQuery (Selectors, Effects, Animations)

**Course:** Web Technologies — Front-End Development, Part 1
**Student:** LiYixin
**Group:** SE-2526

A multi-page front-end project built with **jQuery 3.7.1** for Assignment #6. Each part of the
assignment lives on its own page and every page is reachable from the navigation bar.

---

## Live demo

The project is published with **GitHub Pages**:

> https://cce-li.github.io/AITU-WT1-Assignment6/

---

## Project structure

```
.
├── index.html          # Home page + task index
├── part1.html          # Part 1 — Setup & Selectors          (Tasks 0, 1)
├── part2.html          # Part 2 — Effects                    (Tasks 2, 3, 4)
├── part3.html          # Part 3 — DOM Manipulation           (Tasks 5, 6, 7)
├── part4.html          # Part 4 — Animations                 (Tasks 8, 9, 10)
├── part5.html          # Part 5 — Mini Project               (Task 11)
├── css/
│   └── style.css       # Shared stylesheet (layout, cards, navbar, responsive rules)
├── js/
│   ├── common.js       # jQuery CDN check, $(document).ready(), navbar behaviour
│   ├── part1.js        # Task 0 & Task 1
│   ├── part2.js        # Task 2, 3, 4 — visibility, fade, slide
│   ├── part3.js        # Task 5, 6, 7 — append/prepend/remove, attr, val
│   ├── part4.js        # Task 8, 9, 10 — animate()
│   └── part5.js        # Task 11 — accordion menu
└── images/
    ├── aurora.svg      # Used by the fade demo (Task 3)
    ├── sunset.svg      # Used by the attribute demo (Task 6)
    └── ocean.svg       # Second image for the src swap (Task 6)
```

---

## Task checklist

| Part | Task | Page | What it demonstrates |
| ---- | ---- | ---- | -------------------- |
| 1 | Task 0 — Setup | `part1.html` | jQuery from CDN, `$(document).ready()`, `console.log("jQuery is ready!")` |
| 1 | Task 1 — Selectors & CSS | `part1.html` | ID / class / tag selectors, `.text()`, `.html()`, `.css()` |
| 2 | Task 2 — Visibility | `part2.html` | `.hide()`, `.show()`, `.toggle()` |
| 2 | Task 3 — Fade | `part2.html` | `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`, `.fadeTo()` |
| 2 | Task 4 — Slide | `part2.html` | `.slideUp()`, `.slideDown()`, `.slideToggle()` |
| 3 | Task 5 — Add & Remove | `part3.html` | `.append()`, `.prepend()`, `.remove()` |
| 3 | Task 6 — Attributes | `part3.html` | `.attr("src", ...)`, `.attr("href", ...)` |
| 3 | Task 7 — Form interaction | `part3.html` | `.val()` read + `.text()` live preview |
| 4 | Task 8 — Basic animation | `part4.html` | `.animate()` changing size and position |
| 4 | Task 9 — Sequential animation | `part4.html` | Chained animations: right → down → shrink → return |
| 4 | Task 10 — Combined animation | `part4.html` | Opacity + size + movement in one `.animate()` call |
| 5 | Task 11 — Mini project | `part5.html` | Accordion menu with slide animations |

---

## How to run

No build step and no dependencies are required — the project is plain HTML, CSS and JavaScript.

**Option 1 — open directly**

Open `index.html` in any modern browser.

**Option 2 — local server (recommended)**

```bash
# with Node.js
npx serve .

# or with Python
python -m http.server 8000
```

Then open <http://localhost:8000> (or the port printed by `serve`).

**Check the setup task:** open the browser DevTools console on any page. You should see:

```
jQuery is ready!
jQuery version: 3.7.1
```

The Part 1 page also mirrors those messages into an on-page "Console mirror" panel.

---

## How it is built

* **jQuery 3.7.1** loaded from the official CDN (`https://code.jquery.com/jquery-3.7.1.min.js`).
* **One stylesheet** (`css/style.css`) shared by every page, with CSS custom properties for the
  colour palette and a responsive navbar.
* **One script per page**, so the code for a task stays easy to find and explain.
* All event handlers are registered inside `$(document).ready()` so the DOM is ready before jQuery
  touches it.
* The images are local SVG files, so the project has no external image dependency and works offline.

---

## Deployment (GitHub Pages)

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Under *Build and deployment*, choose **Deploy from a branch**.
4. Select branch **main** and folder **/ (root)**, then click **Save**.
5. The site becomes available at `https://<username>.github.io/AITU-WT1-Assignment6/`.

---

## References

* jQuery API documentation — <https://api.jquery.com>
* W3Schools jQuery tutorial — <https://www.w3schools.com/jquery/>
* W3Schools jQuery effects reference — <https://www.w3schools.com/jquery/jquery_ref_effects.asp>
