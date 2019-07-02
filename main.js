// frog onclick

// const frogs = ['red-frog', ];
// const frogsJSObj = [];

let cMajorScale = [cNote, dNote, eNote, dNote, fNote, gNote, aNote, cNote, highCNote,]

// C major scale notes
let cNote = new Audio('cNote.mp3');
// bNote.play();
let dNote = // sound file

let frogs = document.querySelectorAll('.frog')
// frogs.dataset.key
// frogs.dataset.note

/* sample code I found online
function play(){
    var audio = document.getElementById("audio");
    audio.play();
}
*/

function playNote(e) 

// var audio = document.getElementById("audio");
// doucment.getAttribute("id")
let holdStart, holdCheck, holdTime = null;
eventAssignment = function(frog) {
    frog.onmouseover = function(event) {
        // change frog expression from closed to open eyes
    }
    frog.onmousedown = function(event) {
        // check how much time has elapsed since holdStart to change frog expression
        holdTime = performance.now()
        if (holdTime = 0) { // when frog is clicked
            // frog puffs up a little
        } else if (holdTime > 1000 && holdTime < 2000) {
            // frog puffs up more
        } else {
            // frog fully puffed
        }
    }
    frog.onmouseup = function(event) {
        if (holdTime < 1000) {
            // frog grunts
            // frog jumps little
        } else if (holdTime > 1000 && holdTime < 2000) {
            // frog grunts, higher pitch
            // frog jumps middle
        } else {
            // frog plays assigned note
            // frog jumps high
        }
    }
}

frog.forEach(eventAssignment)

/*
when red frog is clicked play cNote
when red frog is clicked play cMajorScale[0]

frog.addEventListener('mousedown', function(event) {
    holdStart = Date.now()
});

frog.addEventListener('mouseup', function(event) {
    holdTime = Date.now() - holdStart;
  });

let holdStart, holdTime = null;
holdStart = Date.now()
holdTime = Date.now() - holdStart

now in holdTime you have mousedown time in milliseconds
*/