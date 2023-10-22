let earthtext = document.getElementById('earthtext');
let earth = document.getElementById('earth');
let cloud = document.getElementById('cloud');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    earthtext.style.left = value * -2 + 'px';
    earth.style.top = value * 1 + 'px';
    cloud.style.top = value * 1 + 'px';
});