// IDs for each selector
const gen = document.getElementById("blurbGen");
const dev = document.getElementById("blurbDev");
const mus = document.getElementById("blurbMus");
const soft = document.getElementById("blurbSoft");

// Tracks which button (.selector) is active 
let activeButton = gen;
// Tracks which blurb is currently open
var activeBlurb = "none";
// Tracks which arrow button is currently active
let activeArrow;

// Closes the currently opened blurb
function toggleCurrent() {
  if (activeBlurb !== "none") {
    toggleBlurb(activeBlurb, activeArrow);
  }
}


// || BUTTONS ||
// Hides current blurbs and shows selected ones
function selectDev() {
  console.log("Software engineering selected");

  switch (activeButton) {
    case gen:
      console.log("Hiding general blurbs");
      gen.style.display = "none";
      break;

    case mus:
      console.log("Hiding music blurbs");
      mus.style.display = "none";
      break;

    case soft:
      console.log("Hiding soft skills blurbs");
      soft.style.display = "none";
      break;

    default:
      alreadySelected();  // Alerts user the button is already selected. Also closes open blurb (if any)
      break;
  }
  console.log("Showing dev blurbs");
  dev.style.display = "block";
  toggleCurrent();
  activeButton = dev;  // Sets selected button as active
}

function selectMus() {
  console.log("Music selected");

  switch (activeButton) {

    case gen:
      console.log("Hiding general blurbs");
      gen.style.display = "none";
      break;

    case dev:
      console.log("Hiding software engineering blurbs");
      dev.style.display = "none";
      break;

    case soft:
      console.log("Hiding soft skills blurbs");
      soft.style.display = "none";
      break;

    default:
      alreadySelected();  // Alerts user the button is already selected. Also closes open blurb (if any)
      break;
  }
  console.log("Showing mus blurbs");
  mus.style.display = "block";
  toggleCurrent();
  activeButton = mus;  // Sets selected button as active
}

function selectSoft() {
  console.log("Soft skills selected");

  switch (activeButton) {

    case gen:
      console.log("Hiding general blurbs");
      gen.style.display = "none";
      break;

    case dev:
      console.log("Hiding software engineering blurbs");
      dev.style.display = "none";
      break;

    case mus:
      console.log("Hiding music blurbs");
      mus.style.display = "none";
      break;

    default:
      alreadySelected();  // Alerts user the button is already selected. Also closes open blurb (if any)
      break;
  }

  console.log("Showing soft skills blurbs");
  soft.style.display = "block";
  toggleCurrent();
  activeButton = soft;  // Sets selected button as active
}


// || Alerts user if the clicked button is already selected ||
function alreadySelected() {
  const message =
    "Option is already selected. Please select a different option.";
  console.log(message);
  alert(message);
}


// || Determines how a blurb will behave ||
function toggleBlurb(selector, arrow) {
  let upArrow = "&#x25B2;";
  let downArrow = "&#x25BC;";

  // Closes last opened blurb
  if (activeBlurb !== "none") {
    let element = document.getElementById(activeBlurb);
    element.style.height = "0px";
    activeArrow.innerHTML = downArrow;
    toggleBorder(activeBlurb, false);
    console.log(activeBlurb.replace("Expanded", "") + " toggled off");
  }

  // Closes selected blurb if in open state
  let element = document.getElementById(selector);
  if (selector === activeBlurb) {
    element.style.height = "0px";
    arrow.innerHTML = downArrow;
    toggleBorder(selector, false);
    activeBlurb = "none";
    activeArrow = undefined;
  
  } else {
    // Opens selected blurb if in closed state
    element.style.height = element.scrollHeight + "px";
    arrow.innerHTML = upArrow;
    activeBlurb = selector;
    activeArrow = arrow;
    toggleBorder(selector, true);
    console.log(activeBlurb.replace("Expanded", "") + " toggled on,");
  }
}

2
// || Code for blurb behavior. Content = id (in String format), blurbState = true/false ||
function toggleBorder(content, blurbState) {
  let num = "";
  let selector = "";
  let element;

// Utilizes String manipulation for getting specific blurb number and ID
  // Checks if the second to last character of id is a number (ex: "devExpanded1" vs "devExpanded12")
  if (!isNaN(content.charAt(content.length - 2)))
    num = content.charAt(content.length - 2);
  num = num + content.charAt(content.length - 1);

  // Alters color of borders for open and closed blurbs
  if (content.includes("dev")) {
    selector = "dev" + num;
    element = document.getElementById(selector);

    if (blurbState) {  // dev to soft
      element.classList.remove("devBorder");
      element.classList.add("softBorder");
    } else {  // soft to dev
      element.classList.remove("softBorder");
      element.classList.add("devBorder");
    }

  } else if (content.includes("mus")) {
    selector = "mus" + num;
    console.log(selector + "printed");
    element = document.getElementById(selector);

    if (blurbState) {  // mus to soft
      element.classList.remove("musBorder");
      element.classList.add("softBorder");
    } else {  // soft to mus
      element.classList.remove("softBorder");
      element.classList.add("musBorder");
    }

    // Soft Skill Blurbs alternate between blue and red opened blurb borders
  } else {
    selector = "soft" + num;
    element = document.getElementById(selector);

    if (blurbState) {
      element.classList.remove("softBorder");
      if (Number(num) % 2 == 0) {  // soft to dev
        element.classList.add("devBorder");
      } else {  // soft to mus
        element.classList.add("musBorder");
      }

    } else {
      if (Number(num) % 2 == 0) {  // dev to soft
        element.classList.remove("devBorder");
      } else {  // mus to soft
        element.classList.remove("musBorder");
      }
      element.classList.add("softBorder");
    }
  }
}
