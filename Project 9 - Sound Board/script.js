const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    //create a btn for each sound
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    // add event listener so that the sound plays on click of the button
    btn.addEventListener('click', ()=> {
        //we want to stop other sounds first and then play
        stopSongs();

        document.getElementById(sound).play()
    })

    //add buttons to container
    document.getElementById('buttons').appendChild(btn);
    
})

function stopSongs() {
    sounds.forEach(sound => {
        // get each sound
        const song = document.getElementById(sound) 

        //there's no stop, so all we can do is pause and reset the time to the beginning of the sound
        song.pause();
        song.currentTime = 0;
    })
}