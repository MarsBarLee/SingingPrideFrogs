
    let frogs = document.querySelectorAll('.frog')

    function playNote(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.play();
    }
    
    // let gruntSound = new Audio('grunt.mp3')
    // let highGruntSound = new Audio('highGrunt.mp3')
    
    let holdTime = null;
    
    eventAssignment = function(frog) {
        frog.onkeydown = function(e) {
            console.log(${e})
            holdTime = performance.now() // performance.now() records miliseconds
            if (holdTime = 0) {
                // frog puffs up a little frog.src = ""
            } else if (holdTime > 1000 && holdTime < 2000) {
                // frog puffs up more
            } else {
                // frog fully puffed
            }
        }
        frog.onkeyup = function(e) {
            if (holdTime < 1000) {
                // gruntSound.play();
                frog.style.bottom = '200px'; // frog jumps little, from bottom:50px(defined in CSS) to 200px
            } else if (holdTime > 1000 && holdTime < 2000) {
                // higherGruntSound.play(); frog grunts at higher pitch
                frog.style.bottom = '300px'; // frog jumps middle
            } else {
                // fplayNote(e) frog plays assigned note
                frog.style.bottom = '400px'; // frog jumps high
            }
        }
    }
    
frogs.forEach(eventAssignment)

keydownFunction(function(event) {
    event.style.bottom = '200px';
})
frogs.addEventListeners('keydown', keydownFunction)


// frogs.onkeydown = () => {

// }

// frogs.onkeyup = () => {
//     frog.style.bottom = '200px'
// } 
    
    /*
    Notes
    To access data-* attribute from HTML
    frogs.dataset.key, returns data-key
    
    
    Explanation of playNote function
    function playNote(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        audio.play();
    }
    AIM: press A key, play C note
    A key has keycode of 65
    thus keyCode = "65", play C note
    e.keyCode returns JS keycode. so if press A key, e.keyCode returns 65
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${65}"]`);
    const audio = document.querySelector(`audio[data-key="65"]`);
    thus audio JS variable = entire HTML element with the attribute data-key=65
        HTML element: <audio data-key="65" src="sounds/c.mp3"></audio>
    
    audio.play()
    will thus play C, by playing the value of src, which is sounds/c.mp3
    
    Syntax explanation:
    Backticks is for template literals/string interpolation
        Example of template literals
            const var = 'test'
            console.log(`The value of var is ${myVariable}`) // prints The value of var is test
    Not using "" double quotes because that would hard-code that specific classname
        Example with "" double quotes
        HTML: <p class="example">A paragraph</h2>
        JS:   document.querySelector(".example")
    
    Attribute selectors syntax using [] square brackets
    
    Example of playing an audio file through DOM
    function play(){
        var audio = document.getElementById("audio");
        audio.play();
    }
    
    Not using Date.now() because measures timestamp rather than seconds


    // Instead of having to get each element by ID, you simply listen for a keypress
// Example of getting by ID
    // In HTML, first frog has id='0'
    // In JS, when press first frog, play cMajorScale[0]
    // let cMajorScale = [cNote, dNote, eNote, dNote, fNote, gNote, aNote, cNote, highCNote,]
    // let cNote = new Audio('cNote.mp3')
    */