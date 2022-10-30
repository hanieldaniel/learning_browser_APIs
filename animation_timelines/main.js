const slider = document.querySelector('input')
const playButton = document.querySelector('#play')


const aliceTumbling = [
    { transform: 'rotate(0)'},
    { backgroundColor: '#431236', offset: 0.3 },
    { transform: 'rotate(360deg)' }
];

const aliceTiming = {
    duration: 3000,
    iterations: Infinity
}

const anim = document.querySelector(".alice").animate(
    aliceTumbling,
    aliceTiming
)

anim.pause();

playButton.addEventListener('click', ()=> {
    if(anim.playState === 'running') return anim.pause();
    anim.play();
})

slider.addEventListener('input', (e) => {
    anim.currentTime = anim.effect.getComputedTiming().duration * e.target.valueAsNumber * .01
})
