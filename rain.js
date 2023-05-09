const canvas = document.getElementById('rainCanvas');
const ctx = canvas.getContext('2d');

const rain = {
  drops: [],
  interval: 100,
  gravity: 0.5,
};

rain.init = function() {
  this.drops = [];
  this.interval = 100;
  this.gravity = 0.5;
};

rain.addDrop = function() {
  const drop = {
    x: Math.random() * (canvas.width - 10),
    y: canvas.height,
    size: Math.random() * 10 + 1,
    speed: 0,
  };

  this.drops.push(drop);
};

rain.update = function() {
  for (let i = 0; i < this.drops.length; i++) {
    const drop = this.drops[i];
    drop.y -= this.gravity;
    drop.speed = Math.random() * 5 + 1;
    drop.x += drop.speed;

    if (drop.y <= 0) {
      this.drops.splice(i, 1);
      i--;
    }
  }
};

rain.start = function() {
  this.interval = setInterval(this.update.bind(this), this.interval);
};

rain.stop = function() {
  clearInterval(this.interval);
};

rain.init();
rain.start();
