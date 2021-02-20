const synth = new Tone.Synth();
synth.toMaster();

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener('mousedown', () => {
        synth.triggerAttackRelease(key.id, '8n');
    });
});