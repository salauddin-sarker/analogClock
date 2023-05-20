const main = document.querySelector("main"),
 hourHand = document.querySelector(".hour"),
 minuteHand = document.querySelector(".minute"),
 secondHand = document.querySelector(".second"),
 modeSwitch = document.querySelector(".mode_switch");

// check if the mode is already set to "dark mode" in localStorage
if(localStorage.getItem("mode") === "Dark Mode"){
    // Add 
    main.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}
// Add a click event listener to modeSwicth
modeSwitch.addEventListener("click", () => {
    // toggle the "dark" class on the main element
    main.classList.toggle("dark");
    // click if the " dark" class is currently present on the main element
    const isDarkMode = main.classList.contains("dark");
    // set modeSwictch text base on "dark" class presence
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
     // set localStore "mode" itembase on "dark" class presence
     localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

 const updateTime = () => {
    // Get current time and calculate degres for clock hands
    let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;
    // Rotate the clock hands to the appropriate degree based on the current time
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
    hourHand.style.transform = `rotate(${hrToDeg}deg)`;
 };


 // call updateTime to set clock hands every second
 setInterval(updateTime, 1000);

 // call updateTime function on page load
 updateTime();