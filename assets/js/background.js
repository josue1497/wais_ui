
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');


function Pixel( x, y ) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  const direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function( ctx ) {
  const hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}

const pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];

function animate() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animate );
}

animate();
