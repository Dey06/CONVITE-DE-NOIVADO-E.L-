
// const countdown = document.getElementById('countdown');
// const targetDate = new Date('2025-09-27T18:00:00').getTime();

// const updateCountdown = () => {
//     const now = new Date().getTime();
//     const distance = targetDate - now;

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     countdown.innerHTML = `Faltam ${days} dias, ${hours}h ${minutes}m ${seconds}s`;

//     if (distance < 0) {
//         countdown.innerHTML = "O grande dia chegou!";
//     }
// };

// setInterval(updateCountdown, 1000);
// updateCountdown();

(() => {
    document.addEventListener("DOMContentLoaded", function () {
        let currentYear = new Date().getFullYear();
        let targetDate = new Date('2025-09-27T18:00:00');
        let onStart = () => {
            document.querySelectorAll('.countdown-item').forEach(item => item.classList.add('show'))
        }
        let onTick = ({ days, hours, minutes, seconds }) => {
            document.querySelector('.countdown-item.days').innerHTML = days;
            document.querySelector('.countdown-item.hours').innerHTML = hours;
            document.querySelector('.countdown-item.minutes').innerHTML = minutes;
            document.querySelector('.countdown-item.seconds').innerHTML = seconds;
        };
        let options = new LsCountdownOptions({ targetDate, onStart, onTick });
        let countdown = new LsCountdown(options);

        countdown.start();
        window.mycountdown = countdown;
    });
})();