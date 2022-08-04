// getting the timer nodes
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function padZero(n){
    if(n<10){
        return '0'+n;
    }
    else{
        return n;
    }
}
// end result
setInterval(() =>{
    let date1 = new Date('8/5/2022 17:30:00');
    let date2 = new Date();
    // time difference in milliseconds
    let timeleft = Math.abs(date2 - date1);
    // days
    days.innerHTML = padZero(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
    // hours
    hours.innerHTML = padZero(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    // minutes
    minutes.innerHTML = padZero(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
    // seconds remaining
    seconds.innerHTML = padZero(Math.floor((timeleft % (1000 * 60)) / 1000));
    
},1000)
