// getting the timer nodes
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

// end result
setInterval(() =>{
    let date1 = new Date('8/5/2022');
    let date2 = new Date();
    // time difference in milliseconds
    let timeleft = Math.abs(date2 - date1);
    // days
    days.innerHTML = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    // hours
    hours.innerHTML = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // minutes
    minutes.innerHTML = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    // seconds remaining
    seconds.innerHTML = Math.floor((timeleft % (1000 * 60)) / 1000);
    
},1000)
