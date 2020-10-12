let wrapper = document.getElementById('wrapper')

const canvas = document.createElement('canvas');
canvas.width = wrapper.getBoundingClientRect().width
canvas.height = wrapper.getBoundingClientRect().height
const c = canvas.getContext('2d');

const particleArray = [];

const maxParticles = 10;
const particleSize = 7;
let speedx = -1;
let speedy = 0.5;
// end of hex num
const opacity = 'aa';


class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = speedx;
        this.vy = speedy;
        
    }
    update() {
        if (this.x >= 0 && this.y <= window.innerHeight) {
            
            this.x += this.vx;
            this.y += this.vy;
            this.vy = this.vy * 1.005;
        } else {
            this.x = randomPos('x');
            this.y = 0;
            this.vy = speedy;
        }
        this.draw()
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, particleSize, 0, Math.PI * 2);
        c.fill()
        c.closePath()
    }
    
}


init()
function init() {
    for (let i = 0; i < maxParticles; i++) {
        particleArray.push(new Particle(randomPos('x'),randomPos('y') ))
    }
    animate()
}
function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    c.fillStyle = `#1a1a2e${opacity}`;
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    c.fillStyle = 'plum';
    particleArray.forEach(particle => {
        particle.update();
    })
}

function randomPos(axis) {
    if(axis === 'x'){
        return Math.random() * (window.innerWidth + window.innerHeight);
    }
    else if(axis === 'y'){
        return Math.random() * window.innerHeight;
    }else {
        return 100;
    }
}


window.addEventListener('resize', () => {
    canvas.width = wrapper.getBoundingClientRect().width
    canvas.height = wrapper.getBoundingClientRect().height
})

wrapper.appendChild(canvas);