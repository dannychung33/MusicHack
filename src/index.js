const synth = new Tone.Synth();
synth.toMaster();

const keys = document.querySelectorAll(".key");
console.log(keys);

keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        console.log(e.target.dataset.note)
        synth.triggerAttackRelease(e.target.dataset.note, '8n');
        e.target.style.backgroundColor = 'lightblue';
        setTimeout(()=>{
            changeBack(e.target);
        }, 220);
        console.log(e.target)
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