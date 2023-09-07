const nums = document.querySelectorAll(".nums .num");
const section = document.querySelector(".three");
let started = false;

const startIncreasing = (el) => {
    let goal = el.dataset.goal;
    let counter = setInterval(() => {
        el.textContent++
        if(el.textContent == goal) {
            clearInterval(counter)
        }
    }, 2000 / goal);
}

window.onscroll = function() {
    if(window.scrollY >= section.offsetTop - 100) {
        if(!started) {
            nums.forEach((num) => startIncreasing(num));
        }
        started = true;
    }
}

// request animation frame
/*
const nums = document.querySelectorAll(".nums .num");
const section = document.querySelector(".three");
let started = false;

const startIncreasing = (el) => {
    let goal = el.dataset.goal;
    let start = 0; // Start value for the animation
    let previousTimestamp = null; // Used to calculate time elapsed

    const animate = (timestamp) => {
        if (!previousTimestamp) previousTimestamp = timestamp;

        const timeElapsed = timestamp - previousTimestamp;

        if (timeElapsed >= 2000) {
            // Update the text content to the goal value
            el.textContent = goal;
        } else {
            // Calculate the next value to display
            const increment = (goal - start) * (timeElapsed / 2000);
            el.textContent = Math.round(start + increment);
            requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
};

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
        if (!started) {
            nums.forEach((num) => startIncreasing(num));
        }
        started = true;
    }
};
*/