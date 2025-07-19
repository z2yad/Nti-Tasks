let form_event = document.getElementById("event_Form");
let event_Name = document.getElementById("Event_name");
let time_Remaining = document.getElementById("Time_Remaining");
let search_Event = document.getElementById("Search_Event");
let start_Countdown = document.getElementById("Start_Countdown");
let event_message = document.getElementById("event_message");
let countdown_display = document.getElementById("countdown_display");
let events_list = document.getElementById("event_list");

let events = [];

form_event.addEventListener("submit", function(e) {
    e.preventDefault();

    let eventName = event_Name.value.trim();
    let time = parseInt(time_Remaining.value.trim());

    if (eventName === "" || isNaN(time) || time <= 0) {
        alert("Please fill in all fields with valid data");
        return;
    }

    event_message.textContent = "";

    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
    }

    let remainingTime = time;
    countdown_display.textContent = `Time remaining: ${remainingTime} seconds`;

    window.countdownInterval = setInterval(function(){
        remainingTime--;
        countdown_display.textContent = `Time remaining: ${remainingTime} seconds`;

        if(remainingTime <= 0){
            clearInterval(window.countdownInterval);
            countdown_display.textContent = "";
            event_message.textContent = `Event "${eventName}" has started!`;
        }
    }, 1000);

    // ✅ إضافة اسم الحدث للنص وليس العنصر نفسه
    events.push(eventName);
    displayEvents(events);
});

function displayEvents(filteredEvents){
    events_list.innerHTML = '';
    filteredEvents.forEach((event, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${event}`;
        events_list.appendChild(li);
    });
}

search_Event.addEventListener("input", function () {
    let query = search_Event.value.trim().toLowerCase();

    let filtered = events.filter(function(event) {
        return event.toLowerCase().includes(query);
    });

    displayEvents(filtered);
});