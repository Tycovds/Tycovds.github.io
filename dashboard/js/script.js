let btn = document.getElementById('open-menu');
let menu = document.querySelector('.side-menu');
let closeBtn = document.querySelector('.close-menu')

btn.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    document.body.style.overflowY = 'hidden';
    // menu.style.overflowY = 'hidden'
})

closeBtn.addEventListener('click', e => {
    menu.classList.remove('open-menu');
    document.body.style.overflow = 'scroll';
    // menu.style.overflowY = 'scroll';

})

const ctx = document.getElementById('myChart').getContext('2d');
const pieCtx = document.getElementById('pieChart').getContext('2d')
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: '',
            data: [6000, 8000, 5000, 3000, 3000, 6500],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            lineTension: 0.3
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
const myPieChart = new Chart(pieCtx, {
    type: 'doughnut',
    data: {
        labels: ['Shoes', 'Shirts', 'Pants'],
        datasets: [{
            data: [12, 40, 48],
            // label: 'Total sales',
            borderColor: 'rgb(47, 40, 90)',
            hoverBorderWidth: 4,
            backgroundColor: [
                '#c300ff',
                '#caacee',
                '#6655bb'
            ]
        }]
    },
    options: {
        legend: {
            // display: false
            position: 'left'
        }
    }
});