// creating counters and status of the timer
let status = "stopped";
let minutes = 25;
let seconds = 0;

// getting minutes and seconds from documents
const minutesDisplay = document.querySelector("#minutes");
const secondsDisplay = document.querySelector("#seconds");

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
            default:
                console.log("not in switch statement")
            }
    }
};