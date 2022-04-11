const colors = [
    "#46244C",
    "#712B75",
    "#C74B50",
    "#D49B54"
]


const emotions = {
    happy: {
        TrueColor: "#46244C",
        CurrentColor: "#2B2B2B",
        Text: "This is example Text.",
        Audio: "assets/audio/happy.mp3",
        Correct: false
    },
    sad: {
        TrueColor: "#712B75",
        CurrentColor: "#2B2B2B",
        Text: "This is example Text.",
        Audio: "assets/audio/sad.mp3",
        Correct: false
    },
    angry: {
        TrueColor: "#C74B50",
        CurrentColor: "#2B2B2B",
        Text: "This is example Text.",
        Audio: "assets/audio/angry.mp3",
        Correct: false
    },
    indifferent: {
        TrueColor: "#D49B54",
        CurrentColor: "#2B2B2B",
        Text: "This is example Text.",
        Audio: "assets/audio/indifferent.mp3",
        Correct: false
    }        
   
  };

const externals = {
    father: {
        Audio: "assets/audio/father.mp3",
    },
    jola: {
        Audio: "assets/audio/jola.mp3",
    },
    cousin: {
        Audio: "assets/audio/cousin.mp3",
    },
    mother: {
        Audio: "assets/audio/mother.mp3",
    },
   
  };

function getRandomColor(array, currentColor){
    var output = array[Math.floor(Math.random()*array.length)];

    if(currentColor !== output){
        output = output
    } else {
        output = array[Math.floor(Math.random()*array.length)];
    }

    return(output)
}

function checkCorrect(){
    let arr = new Array();
    for(var obj in emotions) {
        if(emotions[obj].CurrentColor === emotions[obj].TrueColor){
            emotions[obj].Correct = true;
        } else {
            emotions[obj].Correct = false;
        }
        arr.push(emotions[obj].Correct)
      }
    let result = arr.every(Boolean)
    
    if(result) alert("Lösungswort: Aufgewühlt")
}

function playSound(path){
    let audio = new Audio(path);
    document.getElementsByTagName("body")[0].appendChild(audio);
    audio.play();   
}

function toggleColor(obj){
    elem = obj.id;
    var color = getRandomColor(colors, emotions[elem].CurrentColor);
    obj.style.backgroundColor = color;
    emotions[elem].CurrentColor = color;
    checkCorrect();
    playSound(emotions[elem].Audio);
}

function toggleExternals(obj){
    elem = obj.id;
    playSound(externals[elem].Audio);
}

function startGame(){
    for(var obj in emotions) {
        playSound(emotions[obj].Audio);
    }

    document.getElementById("startScreen").style.visibility = "hidden";
}
/*
document.getElementById("person1").style.fill = '#F1DDBF';
document.getElementById("person2").style.fill = '#525E75';
document.getElementById("person3").style.fill = '#78938A';
document.getElementById("person4").style.fill = '#92BA92';
*/

function stopAudio(e){

    if(e.key === "z"){
        var sounds = document.getElementsByTagName('audio');
        for(i=0; i<sounds.length; i++) sounds[i].pause();
    } else {
        console.log("Wrong Key.")
    }
   
}

document.addEventListener('keydown', stopAudio);