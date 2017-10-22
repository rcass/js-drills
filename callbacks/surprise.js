const surpriseSection = document.getElementById('surprise');

function showSurprise() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}

// setTimeout(showSurprise, 1000);  // plain setTimeout

/* const randomTime = Math.random() * 4000;

setTimeout(showSurprise, randomTime); */


/* Anonymous Function Callback

const randomTime = Math.random() * 4000;

setTimeout(function() {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, randomTime); */


/* Arrow Function Callback

const randomTime = Math.random() * 4000;

setTimeout(() => 
    surpriseSection.textContent = '🎉 Surprise! 🎉' , randomTime); */

    