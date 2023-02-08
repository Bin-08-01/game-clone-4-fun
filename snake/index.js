const Snake = {
    construct(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{ x: this.x, y: this.y }];
    }
}

const canvas = document.getElementById('canvas');

const snake = new Snake();
const food = new Food();

const ctx = canvas.getContext("2d");

window.onload = () => {
    gameLoop();
}

const gameLoop = () => {
    setInterval(show, 1000 / 15);
}

const show = () => {
    update();
    draw();
}


const update = () => {

}

const draw = () => {

}