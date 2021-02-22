const synth = new Tone.Synth();
synth.toMaster();

const keys = document.querySelectorAll(".key");
console.log(keys);

/*
const notes = [['C', '4n'],['D','4n'],['C','4n']];
let noteCount = 0;
function playSong(){
    for(let i = 0; i < notes.length; i++){
        //synth.triggerAttackRelease(notes[i][0],notes[i][1]);
    }
}

const playButton = document.getElementById("play_button");

playButton.addEventListener("click", (e)=>{
    playSong();
});
*/
keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        console.log(e.target.dataset.note)
        synth.triggerAttackRelease(e.target.dataset.note, '1n');
        e.target.style.backgroundColor = 'lightblue';
        setTimeout(()=>{
            changeBack(e.target);
        }, 220);
        console.log(e.target)
    });
    key.addEventListener('mouseup', (e) => {
        console.log(e.target.dataset.note)
        console.log(e.target)

        synth.triggerRelease();
    });
});

function changeBack(target){
    if(target.className === "black-key"){
        target.style.backgroundColor = "black";
    }
    else{
    target.style.backgroundColor = "white";
    }
}

