async function introAnim() {
    try {
        await delay(500);
        await fadeInID("hi", 8);
        console.log('Fade in "hi" complete');
        await delay(500);
        await fadeInID("myNameIs", 8);
        console.log('Fade in "myNameIs" complete');
        await delay(250);
        await fadeOutID("name", 6);
        console.log('Fade out "name" complete');
        await changeHTML("name", "Evan Brentson");
        console.log('Change "name" complete');
        await fadeInID("name", 6);
        console.log('Fade in "name" complete');
        await delay(750);
        await fadeInID("headshot", 2);
        console.log('Fade in "headshot" complete');
        await delay(750);
        await fadeInID("titleHr", 1);
        console.log('Fade in "titleHr" complete');
        await fadeInID("dev", 1);
        console.log('Fade in "dev" complete');
        await fadeInID("mus", 1);
        console.log('Fade in "mus" complete');
        await fadeInID("teach", 1);
        console.log('Fade in "teach" complete');
        await fadeInID("lead", 1);
        console.log('Fade in "lead" complete');
        await delay(500);
        await fadeInID("hrDivider", 2);
        console.log('Fade in "hrDivider" complete');
        await fadeInID("about", 2);
        console.log('Fade in "about" complete');
        setState(false);
    } catch (error) {
        showAll();
    }
}
function showAll() {
    console.log("Animation aborted, showing all elements");
    let elements = ["name", "headshot", "titleHr", "dev", "mus", "teach", "lead", "hrDivider", "about"];
        changeHTML("name", "Evan Brentson");
        for (let i = 0; i < elements.length; i++)
            showID(elements[i]);
}
if (getState() !== false) {
    setState(true);
    introAnim();
} else if (getState() === false) {
    showAll();
}