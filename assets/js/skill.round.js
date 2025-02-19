// displays the value of a range input
// why isn't this in the HTML5 spec?
function RangeDisplay( input ) {
  this.input = input;
  this.output = document.createElement('span');
  this.output.className = 'range-display';
  this.units = this.input.getAttribute('data-units') || '';
  // events
  var onChange = this.update.bind( this );
  this.input.addEventListener( 'change', onChange );
  this.input.addEventListener( 'input', onChange );
  // set initial output
  this.update();
  this.input.parentNode.appendChild( this.output );
}

RangeDisplay.prototype.update = function() {
  this.output.textContent = this.input.value + this.units;
};

/* ==================== init ==================== */

// init RangeDisplays
var ranges = document.querySelectorAll('input[type="range"]');
for ( var i=0; i < ranges.length; i++ ) {
  new RangeDisplay( ranges[i] );
}

var scene = document.querySelector('.scene');
var cube = document.querySelector('.cube');
var originX = 50;
var originY = 50;

function updatePerspectiveOrigin() {
  scene.style.perspectiveOrigin = originX + '% ' + originY + '%';
}


// spin cube
var sceneCheckbox = document.querySelector('.scene');
sceneCheckbox.onchange = function() {
  cube.classList.toggle( 'is-spinning', sceneCheckbox.scene );
};
sceneCheckbox.onchange();
