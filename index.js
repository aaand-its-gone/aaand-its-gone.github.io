<script>
var rainNum = 100;

var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

var w = window.innerWidth / 1.1; var h = window.innerHeight / 1.1;
var x = 100; var y = 100;

var rain = [];
for(i = 0; i < rainNum; i++) {
  rain.push(new newRain);
}

function newRain() {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
}

var draw = function() {
  c.width = w;
  c.height = h;

  for(t = 0; t < rain.length; t++) {
    var r = rain[t];

    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(r.x, r.y, 2, 20);

    r.y++;

    if(r.y > h + 20) {
      r.y = -20;
    }
  }
};

setInterval(draw, 3);
</script>
