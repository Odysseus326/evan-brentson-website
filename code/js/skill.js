const gen = document.getElementById("blurbGen");
const dev = document.getElementById("blurbDev");
const mus = document.getElementById("blurbMus");
const soft = document.getElementById("blurbSoft");
let activeButton = gen;
var activeBlurb = "none";
let activeArrow;
function selectSkill(element) {
  if (element.id === "devButton") {
    console.log("Software engineering selected");
    selectDev();
  } else if (element.id === "musButton") {
    console.log("Music selected");
    selectMus();
  } else {
    console.log("Soft skills selected");
    selectSoft();
  }
  if (activeBlurb !== "none") {
    toggleBlurb(activeBlurb, activeArrow);
  }
}
// BUTTONS
function selectDev() {
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
      alreadySelected();
      break;
  }
  console.log("Showing dev blurbs");
  dev.style.display = "block";
  activeButton = dev;
}
function selectMus() {
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
      alreadySelected();
      break;
  }
  console.log("Showing mus blurbs");
  mus.style.display = "block";
  activeButton = mus;
}
function selectSoft() {
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
      alreadySelected();
      break;
  }
  console.log("Showing soft skills blurbs");
  soft.style.display = "block";
  activeButton = soft;
}
function alreadySelected() {
  const message = "Option is already selected. Please select a different option."
  console.log(message)
  alert(message);
}
// BLURBS
function toggleBlurb(selector, button) {
  let upArrow = "&#x25B2;"
  let downArrow = "&#x25BC;"
  // Closes last opened blurb
  if (activeBlurb !== "none") {
    document.getElementById(activeBlurb).style.display = "none";
    activeArrow.innerHTML = downArrow;
    toggleBorder(activeBlurb, false);
    console.log(activeBlurb.replace("Complete", "") + " toggled off");
  }
  let element = document.getElementById(selector)
  // Closes selected blurb if in open state
  if (selector === activeBlurb) {
    element.style.display = "none";
    button.innerHTML = downArrow;
    toggleBorder(selector, false);
    activeBlurb = "none";
    activeArrow = undefined;
  } else {  // Opens selected blurb if in closed state
    element.style.display = "inline";
    button.innerHTML = upArrow;
    activeBlurb = selector;
    activeArrow = button;
    toggleBorder(selector, true);
    console.log(activeBlurb.replace("Complete", "") + " toggled on,");
  }
}

function toggleBorder(content, blurbState) {
  let num = "";
  let selector = "";
  let element;
  if (!isNaN(content.charAt(content.length - 2)))  // Checks if the second to last character is a number
    num = content.charAt(content.length - 2);
  num = num + content.charAt(content.length - 1);
  if (content.includes('dev')) {
    selector = 'dev' + num;
    element = document.getElementById(selector);


    if (blurbState) {
      element.classList.remove("devBorder");
      element.classList.add("softBorder");
    } else {
      element.classList.remove("softBorder");
      element.classList.add("devBorder");
  }

  } else if (content.includes('mus')) {
    selector = 'mus' + num;
    console.log(selector + "printed");
    element = document.getElementById(selector);


    if (blurbState) {
      element.classList.remove("musBorder");
      element.classList.add("softBorder");
    } else {
      element.classList.remove("softBorder");
      element.classList.add("musBorder");
    }

  } else {
    selector = "soft" + num;
    element = document.getElementById(selector);


    if (blurbState) {
      element.classList.remove("softBorder");
      if (Number(num) % 2 == 0) {
        element.classList.add("devBorder");
      } else {
        element.classList.add("musBorder");
    }
    } else {
      if (Number(num) % 2 == 0){
        element.classList.remove("devBorder");
      } else {
        element.classList.remove("musBorder");
      }
      element.classList.add("softBorder");
    }
  }
}







































/*
function toggleBlurb(blurb) {
    const element = document.getElementById(blurb);
  
    if (blurb.classList.contains('expanded')) {
      // Collapse to intro state
      blurb.style.height = introContent.scrollHeight + 'px';
      blurb.classList.remove('expanded');
      setTimeout(() => {
        completeContent.style.display = 'none';
        introContent.style.display = 'block';
      }, 500); // match transition time
    } else {
      // Expand to complete state
      blurb.style.height = completeContent.scrollHeight + 'px';
      blurb.classList.add('expanded');
      completeContent.style.display = 'block';
      introContent.style.display = 'none';
    }
  }
  */