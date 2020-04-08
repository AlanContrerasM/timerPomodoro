// creating counters and status of the timer
let status = "stopped";
let minutes = 25;
let seconds = 0;

// getting minutes and seconds from documents
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

//creating timer variable, will be given functionality on pressedPlay
let myTimer;


//getting the item buttons
const items = document.querySelectorAll(".item")

// adding functionality 
for (let i = 0; i < items.length; i++) {
    items[i].onclick = function(e) {
        //getting id
        const idItem = e.target.id;
        console.log(idItem);
        switch(idItem){
            case "play":
                pressedPlay();
                break;
            case "pause":
                pressedPause();
                break;
            case "stop":
                pressedStop();
                break;
            case "addMinutes":
            case "decreaseMinutes":
                changeMinutes(idItem);
                break;
            case "addSeconds":
            case "decreaseSeconds":
                changeSeconds(idItem);
                break;
            default:
                console.log("not in switch statement")
            }
    }
};

function pressedPlay(){
    if(status != "playing"){
        myTimer = setInterval(updateTime,1000);
        console.log("started the interval")
        status= "playing";
    };

}

function updateTime(){
    if (seconds == 0 && minutes == 0){
        clearInterval(myTimer);
        console.log("timer finished")
        alert("Timer finished!");
        status = "stopped"
    }else if(seconds == 0){
        minutes -= 1;
        seconds = 59;
    } else seconds -= 1;

    console.log(minutes + ":" + seconds);
    if(seconds < 10) secondsDisplay.innerHTML = "0" + seconds
    else secondsDisplay.innerHTML = seconds;
    
    if(minutes < 10) minutesDisplay.innerHTML = "0" + minutes
    else minutesDisplay.innerHTML = minutes;

}

function pressedPause(){
    if(status == "playing"){
        clearInterval(myTimer);
        console.log("stopped timer");
    }
    status = "stopped"
    console.log("status " + status)
}

function pressedStop(){
    if(status == "playing"){
        clearInterval(myTimer);
        console.log("stopped timer");
    }
    status = "stopped"
    console.log("status " + status)
    minutes = 25;
    seconds = 0;
    minutesDisplay.innerHTML = minutes;
    secondsDisplay.innerHTML = "0" + seconds

}

function changeMinutes(id){
    if (status != "playing"){
        if(id == "addMinutes"){
            minutes += 1;
            minutesDisplay.innerHTML = minutes;
        }else if(id == "decreaseMinutes"){
            if (minutes != 0) minutes -= 1;
            minutesDisplay.innerHTML = minutes;
        }
    } else console.log("can't change minutes while timer is playing");
    
}

function changeSeconds(id){
    if (status != "playing"){
        if(id == "addSeconds"){
            seconds += 1;
            if(seconds < 10) secondsDisplay.innerHTML = "0" + seconds
            else secondsDisplay.innerHTML = seconds;
        }else if(id == "decreaseSeconds"){
            if (seconds != 0) seconds -= 1;
            if(seconds < 10) secondsDisplay.innerHTML = "0" + seconds
            else secondsDisplay.innerHTML = seconds;
        }
    } else console.log("can't change seconds while timer is playing");

}