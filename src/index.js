const synth = new Tone.Synth();
synth.toMaster();

const keys = document.querySelectorAll(".key");
console.log(keys);

keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        console.log(e.target.dataset.note)
        synth.triggerAttackRelease(e.target.dataset.note, '8n');
    });
});