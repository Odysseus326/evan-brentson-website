// Accepts boolean values and tracks if the session is new. true = new
function setState(state) {
    sessionStorage.setItem('newState', state.toString());
}
// Returns boolean for the state of the website 
function getState() {
    return JSON.parse(sessionStorage.getItem('newState'));
}
// Delay function
function delay(time) {
    return new Promise((resolve, reject) => {
        if (getState) {
            setTimeout(() => {
                resolve();
            }, time);
        } else
        reject();
    })
}
// Edits innerHTML by ID
function changeHTML(selector, newHTML) {
    return new Promise((resolve) => {
        document.getElementById(selector).innerHTML = newHTML;
        resolve();
    })
}
// Fade in animation by ID
function fadeInID(selector, time) {
    return new Promise((resolve, reject) => {
        let element = document.getElementById(selector);
        let opacity;
        const intervalID = setInterval(function() {
            opacity = Number(getComputedStyle(element).getPropertyValue("opacity"));
            if (opacity < 1 && getState()) {
                opacity += 0.01;
                element.style.opacity = opacity;
            } else if (getState()) {
                clearInterval(intervalID);
                element.style.opacity = 1;
                resolve();
            }
            else {
                reject();
            }
        }, time);
    });
}
// Fade out animation by ID
function fadeOutID(selector, time) {
    return new Promise((resolve) => {
        let element = document.getElementById(selector);
        let opacity;
        const intervalID = setInterval(function() {
            opacity = Number(getComputedStyle(element).getPropertyValue("opacity"));
            if (opacity > 0.005) {
                opacity -= 0.01;
                element.style.opacity = opacity;
            } else {
                clearInterval(intervalID);
                element.style.opacity = 0;
                resolve();
            }
        } , time);
    })
}
function showID(selector) {
    let element = document.getElementById(selector);
    element.style.opacity = 1;
}