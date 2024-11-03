// Accepts boolean values and tracks if the session is new. true = new
function setState(state) {
    sessionStorage.setItem('newState', state.toString());
}

// Returns boolean for the state of the website 
function getState() {
    return JSON.parse(sessionStorage.getItem('newState'));
}

function lessons() {
    alert("This website is still under construction. Please contact Evan through the contact page.");
}